const prisma = require('../config/prismaClient');

// Create a new team
const createTeam = async (userId, teamName) => {
  const team = await prisma.team.create({
    data: {
      name: teamName,
      members: {
        create: {
          userId,
        },
      },
    },
  });
  return team;
};

// Invite a user to a team (mock)
const inviteUserToTeam = async (teamId, email) => {
  // Mock: Check if the user exists
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  // Add the user to the team
  await prisma.teamUser.create({
    data: {
      userId: user.id,
      teamId,
    },
  });

  return { success: true, message: `User with email ${email} invited to the team.` };
};

// List all members of a team
const listTeamMembers = async (teamId) => {
  const members = await prisma.teamUser.findMany({
    where: { teamId },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
    },
  });

  return members.map((member) => member.user);
};

module.exports = { createTeam, inviteUserToTeam, listTeamMembers };