const { Router } = require("express");
const FileController = require("../controllers/file.controller");

const router = Router();

router.post("/uploadFile", FileController.uploadFile);

router.get("/download", FileController.downloadBanner);
router.get("/getBanners", FileController.getBanners);
router.get("/getBanner", FileController.getBanner);

router.delete("/removeFile", FileController.removeFile);

module.exports = router;
