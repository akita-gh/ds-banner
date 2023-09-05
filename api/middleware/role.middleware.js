const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(403)
          .json({ type: "error", message: "Користувач не авторизований" });
      }

      const userRoles = jwt.verify(token, process.env.SECRET);
      let hasRole = false;
      console.log(userRoles);
      userRoles.role.forEach((role) => {
        console.log(role);
        if (roles.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        return res.status(403).json({ message: "У вас нет доступа" });
      }
      next();
    } catch (err) {
      console.log(err);
      return res
        .status(403)
        .json({ type: "error", message: "Ошибка операции без доступа" });
    }
  };
};
