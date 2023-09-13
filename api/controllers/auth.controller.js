const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/user.model.js");

const generateAccessToken = (id, username, role) => {
  const payload = {
    id,
    username,
    role,
  };
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Ошибка при регистрации", errors });
      }

      const { username, password, role } = req.body;

      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.json({ message: "Пользователь уже зарегестрирован" });
      }

      const hashPassword = bcrypt.hashSync(password, 3);
      const user = await new User({
        username,
        password: hashPassword,
        role: !role ? ["USER"] : role,
      });
      user.save();

      return res
        .status(200)
        .json({ message: "Пользователь успешно зарегестрирован" });
    } catch (err) {
      if (err) console.log(err);
      res.json({ message: "Ошибка регестрации" });
    }
  }
  async login(req, res) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res
          .status(401)
          .json({ message: `Пользователь ${username} не найден` });
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: "Введен не верный пароль" });
      }

      const token = generateAccessToken(user._id, username, user.role);

      await User.findOneAndUpdate(
        { username },
        { token: token },
        { new: true }
      );

      return res.json({ token, username: user.username });
    } catch (err) {
      console.log(err);
      res.json({ message: "Ошибка авторизации" });
    }
  }

  async checkAuth(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(404).json({ message: "Токен не найден" });
      }
      const decodeData = jwt.verify(token, process.env.SECRET);
      req.user = decodeData;

      const user = await User.findOne({ username: decodeData.username });

      if (user) {
        if (user.token === token) {
          return res.status(200).json({ isAuth: true, user: user.username });
        } else {
          return res.status(200).json({ isAuth: false });
        }
      } else {
        return res.status(200).json({ isAuth: false });
      }
    } catch (e) {
      console.log(e);
      res.json({ auth: false });
    }
  }
}

module.exports = new AuthController();
