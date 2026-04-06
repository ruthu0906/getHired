import { ArrowRight } from "lucide-react";
import CandidateLayout from "../../layouts/CandidateLayout";

export default function CandidateDashboard() {
  const stats = [
    { label: "Matched", value: 3, color: "text-purple-600" },
    { label: "Saved", value: 1, color: "text-orange-600" },
    { label: "Applied", value: 1, color: "text-green-600" },
    { label: "Available", value: 6, color: "text-blue-600" },
  ];

  const quickActions = [
    { label: "Discover Jobs", sublabel: "Swipe through open roles", color: "bg-purple-600 hover:bg-purple-700" },
    { label: "Complete Profile", sublabel: "71% complete", color: "bg-indigo-600 hover:bg-indigo-700" },
    { label: "Saved Jobs", sublabel: "1 applied", color: "bg-orange-500 hover:bg-orange-600" },
    { label: "My Applications", sublabel: "1 applied", color: "bg-emerald-600 hover:bg-emerald-700" },
  ];

  const recentActivity = [
    { text: "Matched with Frontend Developer at Stripe", time: "Recently" },
    { text: "Matched with Backend Engineer at Airbnb", time: "Recently" },
    { text: "Matched with Product Designer (UI/UX) at Figma", time: "Recently" },
    { text: "Applied to Product Designer (UI/UX) at Figma", time: "3/30/2025" },
  ];

  return (
    <CandidateLayout>
      <div className="max-w-5xl mx-auto px-6 py-12">

        <div className="mb-8">
          <p className="text-sm text-purple-600 font-medium mb-2">CANDIDATE DASHBOARD</p>
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">
            Welcome back 👋
          </h1>
          <p className="text-gray-600">6 roles waiting to be discovered.</p>
        </div>

        {/* Profile Completion */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Profile completion</h3>
              <p className="text-sm text-gray-600">
                Complete your profile to improve match scores
              </p>
            </div>
            <span className="text-2xl font-semibold text-orange-500">71%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div
              className="bg-orange-500 h-2 rounded-full"
              style={{ width: "71%" }}
            ></div>
          </div>

          <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
            Complete your profile <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className={`text-4xl font-semibold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick actions
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`${action.color} text-white rounded-xl p-6 text-left transition`}
              >
                <div className="font-medium mb-1">{action.label}</div>
                <div className="text-sm opacity-90">{action.sublabel}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent activity
          </h2>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <p className="text-gray-900">{activity.text}</p>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </CandidateLayout>
  );
}