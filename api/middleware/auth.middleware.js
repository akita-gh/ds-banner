const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res
        .status(403)
        .json({ type: "error", message: "Пользователь не авторизован" });
    }
    const decodeData = jwt.verify(token, process.env.SECRET);
    req.user = decodeData;
    next();
  } catch (err) {
    console.log(err);
    return res
      .status(403)
      .json({ type: "error", message: "Ошибка при верифекации токена" });
  }
};
