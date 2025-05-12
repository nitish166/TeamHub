import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleGetStarted = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Hero Section */}
      <header className="flex-grow flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">TeamHub</span>
          </h1>
          <p className="text-lg mb-8">
            The ultimate platform to manage your teams, projects, and tasks
            efficiently.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-yellow-300 text-blue-800 px-8 py-3 rounded-md shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Features Section */}
      <main className="bg-white text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose TeamHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Team Management</h3>
              <p className="text-gray-600">
                Create and manage teams effortlessly. Collaborate with your
                team members in one place.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Project Tracking</h3>
              <p className="text-gray-600">
                Organize your projects and track progress with ease.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Task Management</h3>
              <p className="text-gray-600">
                Assign tasks, set deadlines, and monitor their status in real
                time.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
