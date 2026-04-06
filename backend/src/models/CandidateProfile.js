const mongoose = require("mongoose");

const candidateProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  bio: { type: String, default: "" },
  location: { type: String, default: "" },
  phone: { type: String, default: "" },
  linkedIn: { type: String, default: "" },
  github: { type: String, default: "" },
  portfolio: { type: String, default: "" },
  skills: [{ type: String }],
  education: [{ degree: String, institution: String, year: Number }],
  experience: [
    {
      title: String,
      company: String,
      from: String,
      to: String,
      description: String,
    },
  ],
  documents: [
    {
      name: String,
      url: String,
      uploadedAt: { type: Date, default: Date.now },
    },
  ],
  completionPercent: { type: Number, default: 0 },
});

module.exports = mongoose.model("CandidateProfile", candidateProfileSchema);
