import { useState } from "react";
import { X } from "lucide-react";
import CandidateLayout from "../../layouts/CandidateLayout";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("basic");
  const [skills, setSkills] = useState(["coding"]);
  const [skillInput, setSkillInput] = useState("");

  const tabs = [
    { id: "basic", label: "Basic Info" },
    { id: "career", label: "Career" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "documents", label: "Documents & Bio" },
  ];

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <CandidateLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">

        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-sm text-purple-600 font-medium mb-2">ACCOUNT</p>
            <h1 className="text-4xl font-semibold text-gray-900 mb-2">
              Your Profile
            </h1>
            <p className="text-gray-600">
              Fill in your details to improve your match scores.
            </p>
          </div>
          <span className="text-2xl font-semibold text-orange-500">71%</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-medium ${
                activeTab === tab.id
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">

          {activeTab === "skills" && (
            <div>

              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Skills
              </h2>

              <div className="flex gap-2 mb-4">

                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  placeholder="Type a skill"
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                  onClick={addSkill}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg"
                >
                  Add
                </button>

              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg"
                  >
                    <span className="text-sm">{skill}</span>

                    <button onClick={() => removeSkill(skill)}>
                      <X className="w-3 h-3" />
                    </button>

                  </div>
                ))}
              </div>

            </div>
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button className="text-gray-600 hover:text-gray-900">
              Reset
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg">
              Save Profile
            </button>
          </div>

        </div>

      </div>
    </CandidateLayout>
  );
}