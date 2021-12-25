import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";

import postsRoute from "./routes/posts.js";

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors);
// app.use("/posts", () => {
//   console.log("This is is a middleware");
// });

//import routes
app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on Home");
});

//connect to db
mongoose.connect(process.env.DBURI, () => {
  console.log("Connected to DB");
});

//Listen to the server
app.listen(process.env.PORT);
