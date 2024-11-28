const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  lecturer: {
    type: String,
  },
  lecturhour: {
    type: Number,
  },
  praticeHours: {
    type: Number,
  },
  credits: {
    type: Number,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
