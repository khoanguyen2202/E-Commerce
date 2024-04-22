const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello world AKHOA-MTHU");
});

mongoose
  .connect(
    `mongodb+srv://khoa:${process.env.MONGO_DB_PASSWORD}@cluster0.uin9rsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connect DB success");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Server is running on port", +port);
});
