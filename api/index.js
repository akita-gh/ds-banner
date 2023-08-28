const express = require("express");
const connectToMongo = require("./connectToMongo.js");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/auth.route.js");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const option = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Frank Gaston",
        url: "https://github.com/vinhhung263",
        email: "hungpv263@gmail.com",
      },
    },
  },
  apis: ["./docs/*.js"],
};
const spec = swaggerJSDoc(option);

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    limits: { fileSize: 500 * 1024 * 1024 },
  })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));
app.use("/api/auth", authRoute);

connectToMongo(app);
