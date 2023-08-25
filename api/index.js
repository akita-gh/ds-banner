const express = require("express");
const connectToMongo = require("./connectToMongo.js");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/auth.route.js");
const app = express();

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    limits: { fileSize: 500 * 1024 * 1024 },
  })
);

app.use("/api/auth", authRoute);

connectToMongo(app);
