const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bunnerModel = new Schema({
  ava: String,
  banner: String,
  folderPath: String,
});

module.exports = mongoose.model("Bunner", bunnerModel);
