import express from "express";
// import mongoose from "mongoose";
import * as dotenv from "dotenv";
import dbConnect from "./db.js";
import bodyParser from "body-parser";
// import { Register } from "./login.js";
import router from "./router.js";
dotenv.config();
const app = express();
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

dbConnect();
// Register();

let arr = [];

app.use("/api/v1/user", router);

app.get("/user", (req, res) => {
  let arr = [
    {
      name: "sachin gupta",
      age: 21,
      address: "gkp",
    },

    {
      name: "manish kumar",
      age: 22,
      address: "mrj",
    },

    {
      name: "vineet kasaudan",
      age: 19,
      address: "lucknow",
    },
  ];

  res.send(arr);
});

let sum = 0;
let apiTimeDeails = (arr) => {
  app.get("/api/timeDetails", (req, res) => {
    sum = sum + 1;
    arr.push(sum);
    console.log(arr);
    res.send(`<h1>Hey, it works! ${sum}  ${Date.now()}</h1>`);
  });
};

apiTimeDeails(arr);

// app.post("/register", async (req, res) => {
//   const { userName, email, password } = req.body;
//   console.log(userName, email, password);
//   // res.send(userName, email, password);
// });
app.listen(process.env.port, () => {
  console.log(`server running is port ${process.env.port}`);
});
