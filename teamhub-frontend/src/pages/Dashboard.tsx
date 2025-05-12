import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'team' | 'project'>('team'); // Manage active tab state

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h2>
          <p className="text-gray-600 mb-8">
            Manage your teams, projects, and tasks efficiently.
          </p>
        </section>

        {/* Tabs for Team Management and Project Management */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('team')}
            className={`px-6 py-2 rounded-md shadow-md ${
              activeTab === 'team' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Team Management
          </button>
          <button
            onClick={() => setActiveTab('project')}
            className={`px-6 py-2 rounded-md shadow-md ${
              activeTab === 'project' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            Project Management
          </button>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        {activeTab === 'team' && (
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Team Management</h3>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Manage Your Teams</h4>
              <p className="text-gray-600 mb-4">
                Create and manage your teams, invite members, and collaborate effectively.
              </p>
              <Link
                to="/team-management"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              >
                Go to Team Management
              </Link>
            </div>
          </section>
        )}

        {activeTab === 'project' && (
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Project Management</h3>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Manage Your Projects</h4>
              <p className="text-gray-600 mb-4">
                Create projects, add tasks, and track progress with your team.
              </p>
              <Link
                to="/project-management"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              >
                Go to Project Management
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;