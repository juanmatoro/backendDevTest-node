// app.js
const express = require("express");
const cors = require("cors");
const productRouter = require("./controllers/productController");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/product", productRouter);

module.exports = app;
