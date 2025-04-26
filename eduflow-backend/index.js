const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/eduflow");

// Import Routes
const studentRoutes = require("./model/routes/student");
const teacherRoutes = require("./model/routes/teacher");

// Use Routes
app.use("/api/student", studentRoutes);
app.use("/api/teacher", teacherRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
