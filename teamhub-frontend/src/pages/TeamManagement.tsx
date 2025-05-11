import React from 'react';
import CreateTeam from '../components/Team/CreateTeam';
import InviteUser from '../components/Team/InviteUser';
import TeamMembers from '../components/Team/TeamMembers';

const TeamManagement: React.FC = () => {
  const teamId = 'your-team-id'; // Replace with the actual team ID

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Team Management</h1>
      <CreateTeam />
      <div className="mt-8">
        <InviteUser teamId={teamId} />
      </div>
      <div className="mt-8">
        <TeamMembers teamId={teamId} />
      </div>
    </div>
  );
};

export default TeamManagement;