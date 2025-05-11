import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard</h2>
          <p className="text-gray-600 mb-8">
            Here you can manage your teams, projects, and tasks.
          </p>
        </section>

        {/* Quick Links for Team Management */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Team Management</h3>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Create a Team</h4>
              <p className="text-gray-600">Start by creating a new team for your projects.</p>
              <Link
                to="/team-management"
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              >
                Manage Teams
              </Link>
            </li>
            <li className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Invite Users</h4>
              <p className="text-gray-600">Invite team members to collaborate on your projects.</p>
              <Link
                to="/team-management"
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              >
                Invite Users
              </Link>
            </li>
            <li className="bg-white p-4 rounded-md shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">View Team Members</h4>
              <p className="text-gray-600">See all the members of your team in one place.</p>
              <Link
                to="/team-management"
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              >
                View Members
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;