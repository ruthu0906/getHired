const mongoose = require("mongoose");

const matchScoreSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  score: { type: Number, min: 0, max: 100 },
  reasons: [{ type: String }],
  calculatedAt: { type: Date, default: Date.now },
});

matchScoreSchema.index({ candidate: 1, job: 1 }, { unique: true });

module.exports = mongoose.model("MatchScore", matchScoreSchema);
