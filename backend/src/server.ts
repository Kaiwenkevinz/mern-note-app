import express from "express";
const app = express();

const port = 3001;

app.get("/", function (req, res) {
  res.send("Hello World");
  console.log("test1");
});

app.listen(port);
