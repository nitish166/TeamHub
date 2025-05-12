const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Protect all routes with authentication middleware
router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   name: Team Management
 *   description: Endpoints for managing teams
 */

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

/**
 * @swagger
 * /team/invite:
 *   post:
 *     summary: Invite a user to a team
 *     tags: [Team Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teamId:
 *                 type: string
 *                 example: team-id
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: User invited successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User with email user@example.com invited to the team.
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /team/{teamId}/members:
 *   get:
 *     summary: List all members of a team
 *     tags: [Team Management]
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the team
 *     responses:
 *       200:
 *         description: List of team members
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 members:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: user-id
 *                       name:
 *                         type: string
 *                         example: John Doe
 *                       email:
 *                         type: string
 *                         example: john@example.com
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /team/list:
 *   get:
 *     summary: List all teams for the authenticated user
 *     tags: [Team Management]
 *     responses:
 *       200:
 *         description: List of teams
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 teams:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: team-id
 *                       name:
 *                         type: string
 *                         example: Team Alpha
 */

// Create a new team
router.post('/create', teamController.createTeam);

// Invite a user to a team
router.post('/invite', teamController.inviteUserToTeam);

// List all members of a team
router.get('/:teamId/members', teamController.listTeamMembers);

// List all teams for the authenticated user
router.get('/list', teamController.listTeams);

module.exports = router;