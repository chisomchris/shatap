import express from "express";
import { config } from "dotenv";

config();
const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ShatApp" });
});
app.listen(4000, () => {
  console.log("http://localhost:4000");
});
