const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routing = require("./router/router");
const bodyparser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyparser.json());
const port = 5000;
app.listen(port, () => {
  console.log("Port is connected");
});
mongoose.connect("mongodb://127.0.0.1:27017/finalproject", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("Database connected");
});
app.use("/", routing);
