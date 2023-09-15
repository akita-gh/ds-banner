/**
 * @swagger
 * tags:
 *   name: File
 *   description: upload file
 * components:
 *   schemas:
 *     File:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         ava:
 *           type: string
 *         banner:
 *           type: string
 *         folderPath:
 *           type: string
 */

/**
 * @swagger
 * /uploadFile:
 *   post:
 *     summary: Регестрация пользователя
 *     parameters:
 *         - in: body
 *           name: data
 *           schema:
 *             type: object
 *             properties:
 *               ava:
 *                 type: string
 *               avatar:
 *                 type: string
 *               banner:
 *                 type: string
 *           required: true
 *           description: файл для загрузки на сервер
 *     tags: [File]
 *     responses:
 *       "200":
 *         description: созданная в результате запись
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       "400":
 *          description: Отправьте сразу два файла
 *       "500":
 *          description: Ошибка при загрузке файлов
 */

/**
 * @swagger
 * /getBanners:
 *   get:
 *     summary: получение всех баннеров
 *     tags: [File]
 *     responses:
 *       "200":
 *         description: Массив банеров
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 */

/**
 * @swagger
 * /getBanner?id=string:
 *   get:
 *     summary: получение конкретнго баннера по id
 *     tags: [File]
 *     responses:
 *       "200":
 *         description: 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 */

/**
 * @swagger
 * /removeFile:
 *   delete:
 *     summary: получение конкретнго баннера по id
 *     parameters:
 *         - in: body
 *           name: data
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     tags: [File]
 *     responses:
 *       "200":
 *         description: 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 */