import React, { useState, useEffect } from 'react';
import CreateTeam from '../components/Team/CreateTeam';
import TeamMembers from '../components/Team/TeamMembers';
import InviteUser from '../components/Team/InviteUser';
import { teamService } from '../services/teamService';
import { useSelector } from 'react-redux';
import store from '../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const TeamManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'teams' | 'create' | 'members' | 'invite'>('teams'); // Add 'invite' tab
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null); // Track selected team ID
  const [teams, setTeams] = useState<{ id: string; name: string }[]>([]); // Store the list of teams
  const [error, setError] = useState('');
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await teamService.listTeams(token!);
        setTeams(response.teams);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch teams');
      }
    };

    fetchTeams();
  }, [token]);

  const handleSelectTeam = (teamId: string) => {
    setSelectedTeamId(teamId);
    setActiveTab('members'); // Switch to the "Team Members" tab
  };

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
          disabled={!selectedTeamId} // Disable if no team is selected
        >
          Team Members
        </button>
        <button
          onClick={() => setActiveTab('invite')}
          className={`px-6 py-2 rounded-md shadow-md ${
            activeTab === 'invite' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          disabled={!selectedTeamId} // Disable if no team is selected
        >
          Invite User
        </button>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      {activeTab === 'teams' && (
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Your Teams</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <ul className="space-y-2">
            {teams.map((team) => (
              <li
                key={team.id}
                className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectTeam(team.id)}
              >
                {team.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === 'create' && <CreateTeam />}
      {activeTab === 'members' && selectedTeamId && <TeamMembers teamId={selectedTeamId} />}
      {activeTab === 'invite' && selectedTeamId && <InviteUser teamId={selectedTeamId} />}
    </div>
  );
};

export default TeamManagement;