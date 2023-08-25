const { Router } = require("express");
const { body } = require("express-validator");
const AuthController = require("../controllers/auth.controller.js");
const router = Router();

router.post(
  "/regestration",
  [
    body("username", "Имя пользователя").notEmpty(),
    body(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({ min: 4, max: 10 }),
  ],
  AuthController.registration
);
router.post("/login", AuthController.login);
router.post("/checkAuth", AuthController.checkAuth);

module.exports = router;
