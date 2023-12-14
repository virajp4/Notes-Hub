import mongoose from "mongoose";

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    year: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;