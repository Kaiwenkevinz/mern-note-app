import express from "express";
const app = express();

app.get("/", function (req: any, res: any) {
  res.send("Hello World");
  console.log('test');
});

app.listen(3000);
