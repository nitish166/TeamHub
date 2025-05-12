import React, { useState } from 'react';
import CreateTeam from '../components/Team/CreateTeam';
import TeamMembers from '../components/Team/TeamMembers';

const TeamManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'teams' | 'create' | 'members'>('teams'); // Manage active tab state
  const teamId = 'your-team-id'; // Replace with the actual team ID

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Team Management</h1>

      {/* Tabs for switching between sections */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('teams')}
          className={`px-6 py-2 rounded-md shadow-md ${
            activeTab === 'teams' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Teams
        </button>
        <button
          onClick={() => setActiveTab('create')}
          className={`px-6 py-2 rounded-md shadow-md ${
            activeTab === 'create' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Create Team
        </button>
        <button
          onClick={() => setActiveTab('members')}
          className={`px-6 py-2 rounded-md shadow-md ${
            activeTab === 'members' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Team Members
        </button>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      {activeTab === 'teams' && (
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Teams</h2>
          <p className="text-gray-600">List of all teams you are part of will go here.</p>
        </div>
      )}
      {activeTab === 'create' && <CreateTeam />}
      {activeTab === 'members' && <TeamMembers teamId={teamId} />}
    </div>
  );
};

export default TeamManagement;