import React, { useEffect, useState } from 'react';
import { teamService } from '../../services/teamService';
import { useSelector } from 'react-redux';
import store from '../../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const TeamMembers: React.FC<{ teamId: string }> = ({ teamId }) => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState('');
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await teamService.listTeamMembers(teamId, token!);
        setMembers(response.members);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch team members');
      }
    };

    fetchMembers();
  }, [teamId, token]);

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Team Members</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ul className="space-y-2">
        {members.map((member: any) => (
          <li key={member.id} className="bg-gray-100 p-2 rounded">
            {member.name} ({member.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;