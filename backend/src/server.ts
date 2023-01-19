import "dotenv/config";
import mongoose from "mongoose";
import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", function (req, res) {
  res.send("Hello World");
  console.log("test1");
});

app.listen(3001);

// mongoose.connect(process.env.MONGO_CONNECTION_STRING!).then(() => {
//   console.log("connected to MDB");
// });


// TODO: debug nodejs typescipt?