import CandidateLayout from "../../layouts/CandidateLayout";

const appliedJobsData = [
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
      "Design the future of design collaboration. Help shape products used by 4M+ designers, engineers, and teams who rely on Figma every day.",
    appliedDate: "3/30/2025",
    status: "Under Review",
  },
];

export default function AppliedJobs() {
  return (
    <CandidateLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-sm text-purple-600 font-medium mb-2">
            YOUR APPLICATIONS
          </p>
          <h1 className="text-4xl font-semibold text-gray-900 mb-1">
            Applied Jobs
          </h1>
          <p className="text-gray-600">1 application in progress.</p>
        </div>

        <div className="space-y-6">
          {appliedJobsData.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${job.logoColor} flex items-center justify-center flex-shrink-0`}
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

                <div className="text-right">
                  <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mb-2">
                    <span className="text-white font-semibold">
                      {job.match}%
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    Applied {job.appliedDate}
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
                <span className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm">
                  {job.experience}
                </span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                  {job.status}
                </span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {job.description}
              </p>

              <div className="flex items-center gap-2 mb-4 text-sm">
                <span className="text-gray-600">💰</span>
                <span className="text-gray-900">{job.salary}</span>
              </div>

              <div className="flex items-center gap-3">
                <button className="text-gray-700 hover:text-gray-900 text-sm">
                  View Details
                </button>
                <button className="text-gray-700 hover:text-gray-900 text-sm">
                  Withdraw Application
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CandidateLayout>
  );
}