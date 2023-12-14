import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Subject from "./models/Subject.mjs";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/subjectsDB");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", async () => {
  console.log("Database connected");
});

app.get("/notes", async (req, res) => {
  Subject.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json("An error occurred on the server.");
    });
});

app.post("/notes/add", async (req, res) => {
  const subject = new Subject(req.body);
  subject
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json("An error occurred on the server.");
    });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await Subject.findByIdAndDelete(id);

  Subject.find({})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json("An error occurred on the server.");
    });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
