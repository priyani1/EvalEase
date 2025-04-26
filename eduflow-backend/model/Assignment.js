const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  pdfSubmission: String,
  marks: Number,
});

module.exports = mongoose.model("Assignment", AssignmentSchema);
