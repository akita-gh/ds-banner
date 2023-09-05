const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const archiver = require("archiver");
const uuid = require("uuid");
const Bunner = require("../models/bunners.model");
class FileController {
  async uploadFile(req, res) {
    const { avatar, banner } = req.files;

    if (!avatar || !banner) {
      res.status(400).json({ message: "Отправьте сразу два файла" });
    }

    let bannerName = uuid.v4();

    try {
      fs.mkdirSync(`./uploads/${bannerName}`, (err) => {
        if (err) console.log(err);
      });
    } catch (err) {
      if (err) console.log(err);
      res.status(500).json({ message: "Папка уже создана" });
    }

    try {
      let bannerPath = `uploads/${bannerName}/${banner.name}`;
      let avatarPath = `uploads/${bannerName}/${avatar.name}`;
      avatar.mv(avatarPath, (err) => err && console.log(err));
      banner.mv(bannerPath, (err) => err && console.log(err));

      await new Bunner({
        ava: avatarPath,
        banner: bannerPath,
        folderPath: `uploads/${bannerName}`,
      }).save();

      res.status(200).json({
        message: `Баннер сохранен по пути ./uploads/${bannerName}`,
      });
    } catch (err) {
      if (err) console.log(err);
      res.status(500).json({ message: "Ошибка при загрузке файлов" });
    }
  }

  async downloadBanner(req, res) {
    const { id } = req.query;

    const banner = await Bunner.findOne({ _id: id });

    if (!banner) {
      res.status(404).json({ message: "Нет баннера по такому ид" });
    }
    const folderToGet = path.resolve(__dirname, "..", banner.folderPath);

    const archive = archiver("zip", { zlib: { level: 9 } });
    archive.on("warning", (err) => {
      if (err.code === "ENOENT") {
        console.warn("Warning:", err.message);
      } else {
        throw err;
      }
    });
    archive.on("error", (err) => {
      throw err;
    });

    const files = fs.readdirSync(folderToGet);
    files.forEach((file) => {
      const filePath = folderToGet + "/" + file;
      archive.file(filePath, { name: file });
    });

    res.setHeader("Content-disposition", "attachment; filename=archive.zip");
    res.setHeader("Content-type", "application/zip");
    archive.pipe(res);
    archive.finalize();
  }
}

module.exports = new FileController();
