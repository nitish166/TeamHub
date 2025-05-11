import React, { useState } from 'react';
import { teamService } from '../../services/teamService';
import { useSelector } from 'react-redux';
import store from '../../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const CreateTeam: React.FC = () => {
  const [teamName, setTeamName] = useState('');
  const [message, setMessage] = useState('');
  const token = useSelector((state: RootState) => state.auth.token);

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await teamService.createTeam(teamName, token!);
      setMessage(`Team "${response.team.name}" created successfully!`);
      setTeamName('');
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Failed to create team');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a Team</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleCreateTeam}>
        <div className="mb-4">
          <label className="block text-gray-700">Team Name</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Team
        </button>
      </form>
    </div>
  );
};

export default CreateTeam;