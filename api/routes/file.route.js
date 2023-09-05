const { Router } = require("express");
const FileController = require("../controllers/file.controller");

const router = Router();

router.post("/uploadFile", FileController.uploadFile);

router.get("/download", FileController.downloadBanner);

router.delete("/removeFile/:id", (req, res) => {});

module.exports = router;
