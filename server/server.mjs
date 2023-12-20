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

function addSubjects() {
  data.forEach(async (subject) => {
    const item = new Subject(subject);
    await item.save().catch((error) => {
      console.error(error);
    });
  });
  console.log("Added All Items");
}

function deleteSubjects(yr) {
  Subject.deleteMany({year: yr})
    .then(() => {
      console.log("Deleted all subjects of year", yr);
    })
    .catch((error) => {
      console.error(error);
    });
}

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", async () => {
  console.log("Database connected");
  // addSubjects();
  // deleteSubjects();
});

app.get("/subjects", async (req, res) => {
  const yr = req.query.year;
  Subject.find({year: yr})
    .then((results) => {
      res.status(200).json(results);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json("An error occurred on the server.");
    });
});

app.post("/subjects/add", async (req, res) => {
  const subject = new Subject(req.body);
  subject
    .save()
    .then((result) => {
      console.log("Added subject to database: ", result.title);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json("An error occurred on the server.");
    });
});

app.delete("/subjects/:id", async (req, res) => {
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
