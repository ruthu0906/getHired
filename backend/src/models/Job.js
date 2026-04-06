const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [String],
  skills: [String],
  location: { type: String },
  remote: { type: Boolean, default: false },
  employmentType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
  },
  salaryMin: { type: Number },
  salaryMax: { type: Number },
  currency: { type: String, default: "INR" },
  deadline: { type: Date },
  status: {
    type: String,
    enum: ["Draft", "Active", "Paused", "Closed"],
    default: "Active",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);
