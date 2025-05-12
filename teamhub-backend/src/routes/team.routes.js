const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Protect all routes with authentication middleware
router.use(authMiddleware);

/**
 * @swagger
 * /team/create:
 *   post:
 *     summary: Create a new team
 *     tags: [Team Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teamName:
 *                 type: string
 *                 example: Team Alpha
 *     responses:
 *       201:
 *         description: Team created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 team:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: team-id
 *                     name:
 *                       type: string
 *                       example: Team Alpha
 */

// Create a new team
router.post('/create', teamController.createTeam);

// Invite a user to a team
router.post('/invite', teamController.inviteUserToTeam);

// List all members of a team
router.get('/:teamId/members', teamController.listTeamMembers);

module.exports = router;