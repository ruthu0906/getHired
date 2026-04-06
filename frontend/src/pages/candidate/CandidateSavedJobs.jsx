import CandidateLayout from "../../layouts/CandidateLayout";

const savedJobsData = [
  {
    id: 1,
    title: "Product Designer (UI/UX)",
    company: "Figma",
    location: "San Francisco, CA",
    logo: "F",
    logoColor: "bg-pink-500",
    match: 33,
    type: "Hybrid",
    time: "Full-time",
    level: "Senior",
    experience: "Urgent",
    salary: "$110k - $140k",
    description:
      "Design the future of design collaboration used by millions of teams.",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Meta",
    location: "Menlo Park, CA",
    logo: "M",
    logoColor: "bg-blue-600",
    match: 29,
    type: "Hybrid",
    time: "Full-time",
    level: "Mid-level",
    experience: "2-4 years",
    salary: "$115k - $145k",
    description:
      "Analyze data at massive scale to drive product decisions.",
  },
];

export default function SavedJobs() {
  return (
    <CandidateLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">

        <div className="mb-8">
          <p className="text-sm text-purple-600 font-medium mb-2">
            YOUR LIST
          </p>
          <h1 className="text-4xl font-semibold text-gray-900 mb-1">
            Saved Jobs
          </h1>
          <p className="text-gray-600">2 jobs saved for later.</p>
        </div>

        <div className="space-y-6">
          {savedJobsData.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >

              <div className="flex items-start justify-between mb-4">

                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${job.logoColor} flex items-center justify-center`}
                  >
                    <span className="text-white text-xl font-semibold">
                      {job.logo}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      {job.title}
                    </h2>
                    <p className="text-gray-600">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>

                <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {job.match}%
                  </span>
                </div>

              </div>

              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                  {job.type}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {job.time}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {job.level}
                </span>
                {job.experience && (
                  <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                    {job.experience}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-4">{job.description}</p>

              <div className="flex items-center gap-2 mb-4 text-sm">
                <span>💰</span>
                <span className="text-gray-900">{job.salary}</span>
              </div>

              <div className="flex items-center gap-3">

                <button className="text-gray-700 hover:text-gray-900 text-sm">
                  View Details
                </button>

                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg text-sm">
                  Apply Now
                </button>

                <button className="text-red-600 hover:text-red-700 text-sm">
                  Remove
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </CandidateLayout>
  );
}