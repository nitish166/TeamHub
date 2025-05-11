const teamService = require('../services/team.service');

const createTeam = async (req, res) => {
  try {
    const { teamName } = req.body;
    const userId = req.user.userId; // Extract userId from the authenticated user
    const team = await teamService.createTeam(userId, teamName);
    res.status(201).json({ success: true, team });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const inviteUserToTeam = async (req, res) => {
  try {
    const { teamId, email } = req.body;
    const result = await teamService.inviteUserToTeam(teamId, email);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const listTeamMembers = async (req, res) => {
  try {
    const { teamId } = req.params;
    const members = await teamService.listTeamMembers(teamId);
    res.status(200).json({ success: true, members });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { createTeam, inviteUserToTeam, listTeamMembers };