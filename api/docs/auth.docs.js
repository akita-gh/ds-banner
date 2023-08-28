/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: registration
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: username
 *         password:
 *           type: string
 *           description: password
 *       example:
 *          username: user123
 *          password: pass12345
 */

/**
 * @swagger
 * /regestration:
 *   post:
 *     summary: Регестрация пользователя
 *     parameters:
 *         - in: body
 *           name: data
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *           required: true
 *           description: данные для регестрации
 *     tags: [Auth]
 *     responses:
 *       "200":
 *         description: Пользователь успешно зарегестрирован.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       "400":
 *          description: Ошибка при регистрации, если пароль или логин не корректный
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: авторизация пользователя
 *     parameters:
 *         - in: body
 *           name: data
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *           required: true
 *           description: данные для входа
 *     tags: [Auth]
 *     responses:
 *       "200":
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     token:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *       "401":
 *          description: Пользователь уже зарегестрирован или не верный пароль
 */

/**
 * @swagger
 * /checkAuth:
 *   post:
 *     summary: проверка авторизации
 *     parameters:
 *         - in: header
 *           name: token
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *           required: true
 *           description: токен авторизации
 *     tags: [Auth]
 *     responses:
 *       "200":
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     isAuth:
 *                       type: boolean
 *                       example: true || false
 *       "404":
 *          content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     message:
 *                       type: string
 *                       example: токен не найден
 */
