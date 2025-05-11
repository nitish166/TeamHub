import React, { useState } from 'react';
import { teamService } from '../../services/teamService';
import { useSelector } from 'react-redux';
import store from '../../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const InviteUser: React.FC<{ teamId: string }> = ({ teamId }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const token = useSelector((state: RootState) => state.auth.token);

  const handleInviteUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await teamService.inviteUser(teamId, email, token!);
      setMessage(response.message);
      setEmail('');
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Failed to invite user');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Invite User</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleInviteUser}>
        <div className="mb-4">
          <label className="block text-gray-700">User Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Invite User
        </button>
      </form>
    </div>
  );
};

export default InviteUser;