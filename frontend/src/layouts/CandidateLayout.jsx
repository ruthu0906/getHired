import { Link, useLocation } from "react-router-dom";

export default function CandidateLayout({ children }) {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/candidate/dashboard" },
    { name: "Discover", path: "/candidate/discover" },
    { name: "Profile", path: "/candidate/profile" },
    { name: "Saved", path: "/candidate/saved" },
    { name: "Matched", path: "/candidate/matched" },
    { name: "Applied", path: "/candidate/applied" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">G</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">GetHired</h1>
            </div>

            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm ${
                    location.pathname === item.path
                      ? "text-gray-900 font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Candidate</span>
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 font-medium text-sm">C</span>
            </div>
          </div>

        </div>
      </header>

      {/* Page Content */}
      <main>{children}</main>

    </div>
  );
}
