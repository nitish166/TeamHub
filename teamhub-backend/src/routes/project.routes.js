const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Protect all routes with authentication middleware
router.use(authMiddleware);

/**
 * @swagger
 * tags:
 *   name: Project Management
 *   description: Endpoints for managing projects and tasks
 */

/**
 * @swagger
 * /project/create:
 *   post:
 *     summary: Create a new project within a team
 *     tags: [Project Management]
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
 *               projectName:
 *                 type: string
 *                 example: Project Alpha
 *     responses:
 *       201:
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 project:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: project-id
 *                     name:
 *                       type: string
 *                       example: Project Alpha
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /project/task:
 *   post:
 *     summary: Add a new task to a project
 *     tags: [Project Management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectId:
 *                 type: string
 *                 example: project-id
 *               title:
 *                 type: string
 *                 example: Task 1
 *               description:
 *                 type: string
 *                 example: This is the first task
 *               status:
 *                 type: string
 *                 example: To Do
 *               assignedToId:
 *                 type: string
 *                 example: user-id
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-12-31T23:59:59.000Z
 *     responses:
 *       201:
 *         description: Task added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 task:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: task-id
 *                     title:
 *                       type: string
 *                       example: Task 1
 *                     status:
 *                       type: string
 *                       example: To Do
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /project/task/{taskId}:
 *   put:
 *     summary: Update a task
 *     tags: [Project Management]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Task Title
 *               description:
 *                 type: string
 *                 example: Updated task description
 *               status:
 *                 type: string
 *                 example: In Progress
 *               assignedToId:
 *                 type: string
 *                 example: new-user-id
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-12-31T23:59:59.000Z
 *     responses:
 *       200:
 *         description: Task updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 task:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: task-id
 *                     title:
 *                       type: string
 *                       example: Updated Task Title
 *                     status:
 *                       type: string
 *                       example: In Progress
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /project/list/{teamId}:
 *   get:
 *     summary: List all projects for a team
 *     tags: [Project Management]
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the team
 *     responses:
 *       200:
 *         description: List of projects retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 projects:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: project-id
 *                       name:
 *                         type: string
 *                         example: Project Alpha
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /project/tasks/{projectId}:
 *   get:
 *     summary: List all tasks for a project
 *     tags: [Project Management]
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the project
 *     responses:
 *       200:
 *         description: List of tasks retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 tasks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: task-id
 *                       title:
 *                         type: string
 *                         example: Task 1
 *                       description:
 *                         type: string
 *                         example: This is the first task
 *                       status:
 *                         type: string
 *                         example: To Do
 *                       assignedToId:
 *                         type: string
 *                         example: user-id
 *                       dueDate:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-12-31T23:59:59.000Z
 *       400:
 *         description: Bad request
 */

// Create a new project within a team
router.post('/create', projectController.createProject);

// Add a task to a project
router.post('/task', projectController.addTaskToProject);

// Update a task
router.put('/task/:taskId', projectController.updateTask);

// List all projects for a team
router.get('/list/:teamId', projectController.listProjects);

// List all tasks for a project
router.get('/tasks/:projectId', projectController.listTasks);

// Get project details
router.get('/:projectId', projectController.getProjectDetails);

module.exports = router;