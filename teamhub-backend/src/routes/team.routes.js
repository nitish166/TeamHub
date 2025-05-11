const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Protect all routes with authentication middleware
router.use(authMiddleware);

// Create a new team
router.post('/create', teamController.createTeam);

// Invite a user to a team
router.post('/invite', teamController.inviteUserToTeam);

// List all members of a team
router.get('/:teamId/members', teamController.listTeamMembers);

module.exports = router;