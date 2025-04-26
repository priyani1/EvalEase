const express = require("express");
const Assignment = require("../Assignment");
const router = express.Router();

// Create a new assignment
router.post("/assignments", async (req, res) => {
  const newAssignment = new Assignment(req.body);
  await newAssignment.save();
  res.json({ message: "Assignment created", assignment: newAssignment });
});

// Get all assignments
router.get("/assignments", async (req, res) => {
  const assignments = await Assignment.find();
  res.json(assignments);
});

// Update assignment with marks
router.put("/assignments/:id", async (req, res) => {
  await Assignment.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Assignment updated" });
});

module.exports = router;
