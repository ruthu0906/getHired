const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  resume: { type: mongoose.Schema.Types.ObjectId, ref: "Document" },
  coverLetter: { type: String },
  status: {
    type: String,
    enum: ["Applied", "Under Review", "Shortlisted", "Rejected", "Offered"],
    default: "Applied",
  },
  statusLog: [
    {
      status: String,
      changedAt: { type: Date, default: Date.now },
      note: String,
    },
  ],
  matchScore: { type: Number, min: 0, max: 100 },
  appliedAt: { type: Date, default: Date.now },
});

applicationSchema.index({ job: 1, candidate: 1 }, { unique: true });

module.exports = mongoose.model("Application", applicationSchema);
