import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Subject from "./models/Subject.mjs";

const db = mongoose.connection;
const app = express();
const port = 5173;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/subjectsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", async () => {
  console.log("Database connected");
  // Example data to insert
  const exampleData = [
    { title: "Math", link: "/math-notes" },
    { title: "Physics", link: "/physics-notes" },
    { title: "Computer Science", link: "/cs-notes" },
  ];

  try {
    // Insert data into the Subject collection
    await Subject.insertMany(exampleData);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    // Close the connection after inserting data
    mongoose.connection.close();
  }
});

app.get("/notes", async (req, res) => {
  try {
    let subjects = db.collection("subjects");
    let results = await subjects.find({}).toArray();
    res.send("hi").status(200);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

app.get("/notes/:id", async (req, res) => {
  let collection = db.collection("subjects");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
