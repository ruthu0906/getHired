const mongoose = require("mongoose");

const recruiterProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  companyName: { type: String, default: "" },
  companySize: { type: String, default: "" },
  industry: { type: String, default: "" },
  website: { type: String, default: "" },
  about: { type: String, default: "" },
});

module.exports = mongoose.model("RecruiterProfile", recruiterProfileSchema);
