const express = require("express");
const Assignment = require("../Assignment");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/submit/:id", upload.single("pdf"), async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  assignment.pdfSubmission = req.file.path; // Save file path
  await assignment.save();
  res.json({ message: "Assignment submitted" });
});

router.get("/results", async (req, res) => {
  const results = await Assignment.find({ marks: { $ne: null } });
  res.json(results);
});

router.get("/assignments", async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching assignments", error });
  }
});

module.exports = router;
