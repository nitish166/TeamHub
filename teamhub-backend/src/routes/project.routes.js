const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Protect all routes with authentication middleware
router.use(authMiddleware);

// Create a new project within a team
router.post('/create', projectController.createProject);

// Add a task to a project
router.post('/task', projectController.addTaskToProject);

// Update a task
router.put('/task/:taskId', projectController.updateTask);

module.exports = router;