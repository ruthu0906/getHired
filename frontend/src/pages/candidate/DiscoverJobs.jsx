import { useState } from "react";
import { X, Check, Bookmark } from "lucide-react";
import CandidateLayout from "../../layouts/CandidateLayout";

const jobData = [
  {
    id: 1,
    title: "Data Analyst",
    company: "Meta",
    location: "Menlo Park, CA",
    logo: "M",
    logoColor: "bg-blue-600",
    match: 29,
    type: "Hybrid",
    time: "Full-time",
    level: "Mid-level",
    salary: "$115k - $145k",
    experience: "2-4 years",
    description:
      "Analyze data at massive scale to drive product decisions for a billion daily active users.",
    skills: ["SQL", "Python", "Tableau", "Statistics"],
    reasons: [
      "Hybrid work mode matches your preference",
      "SQL and Python are core to your skills profile",
    ],
  },
];

export default function DiscoverJobs() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  const currentJob = jobData[currentJobIndex];

  const handlePass = () => {
    if (currentJobIndex < jobData.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    }
  };

  const handleMatch = () => {
    if (currentJobIndex < jobData.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    }
  };

  const handleSave = () => {
    if (savedJobs.includes(currentJob.id)) {
      setSavedJobs(savedJobs.filter((id) => id !== currentJob.id));
    } else {
      setSavedJobs([...savedJobs, currentJob.id]);
    }
  };

  if (!currentJob) {
    return (
      <CandidateLayout>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-center text-gray-600">No more jobs to discover</p>
        </div>
      </CandidateLayout>
    );
  }

  return (
    <CandidateLayout>
      <div className="max-w-3xl mx-auto px-6 py-12">

        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-900 mb-1">
            Discover Jobs
          </h1>
          <p className="text-gray-600">6 roles remaining</p>
        </div>

        <div className="text-right text-sm text-gray-500 mb-4">
          Swipe right to match · left to pass
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 mb-6">

          <div className="flex items-start justify-between mb-6">

            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl ${currentJob.logoColor} flex items-center justify-center`}>
                <span className="text-white text-2xl font-semibold">
                  {currentJob.logo}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                  {currentJob.title}
                </h2>
                <p className="text-gray-600">
                  {currentJob.company} · {currentJob.location}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-semibold text-xl">
                  {currentJob.match}%
                </span>
              </div>

              <div className="absolute -top-1 -right-1">
                <button
                  onClick={handleSave}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    savedJobs.includes(currentJob.id)
                      ? "bg-orange-500 text-white"
                      : "bg-white text-gray-400 border border-gray-300"
                  }`}
                >
                  <Bookmark
                    className="w-4 h-4"
                    fill={savedJobs.includes(currentJob.id) ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>

          </div>

          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
              {currentJob.type}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {currentJob.time}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {currentJob.level}
            </span>
          </div>

          <p className="text-gray-700 mb-6">{currentJob.description}</p>

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-2">
              REQUIRED SKILLS
            </p>

            <div className="flex gap-2">
              {currentJob.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <button className="w-full mt-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            View full details
          </button>

        </div>

        <div className="flex items-center justify-center gap-4">

          <button
            onClick={handlePass}
            className="w-16 h-16 rounded-full border-2 border-red-200 bg-white hover:bg-red-50 flex items-center justify-center"
          >
            <X className="w-8 h-8 text-red-500" />
          </button>

          <button
            onClick={handleMatch}
            className="w-16 h-16 rounded-full border-2 border-green-200 bg-white hover:bg-green-50 flex items-center justify-center"
          >
            <Check className="w-8 h-8 text-green-500" />
          </button>

        </div>

        <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg">
          Apply Now
        </button>

      </div>
    </CandidateLayout>
  );
}