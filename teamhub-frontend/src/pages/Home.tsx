import React from "react";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Main Content */}
      <main className=" flex-grow container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to TeamHub
          </h2>
          <p className="text-gray-600 mb-8">
            Manage your teams, projects, and tasks efficiently with TeamHub.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600">
            Get Started
          </button>
        </section>

        {/* Placeholder for Features */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Features</h3>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">
                Team Management
              </h4>
              <p className="text-gray-600">
                Create and manage teams effortlessly.
              </p>
            </li>
            <li className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">
                Project Tracking
              </h4>
              <p className="text-gray-600">
                Organize your projects and track progress.
              </p>
            </li>
            <li className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">
                Task Management
              </h4>
              <p className="text-gray-600">
                Assign tasks and monitor their status.
              </p>
            </li>
          </ul>
        </section>
      </main>

      
    </div>
  );
};

export default Home;
