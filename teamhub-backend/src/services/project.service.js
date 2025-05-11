const prisma = require('../config/prismaClient');

// Create a new project within a team
const createProject = async (teamId, projectName) => {
  const project = await prisma.project.create({
    data: {
      name: projectName,
      teamId,
    },
  });
  return project;
};

// Add a task to a project
const addTaskToProject = async (projectId, taskData) => {
  const task = await prisma.task.create({
    data: {
      ...taskData,
      projectId,
    },
  });
  return task;
};

// Update a task (e.g., reassign, change status, etc.)
const updateTask = async (taskId, updates) => {
  const task = await prisma.task.update({
    where: { id: taskId },
    data: updates,
  });
  return task;
};

module.exports = { createProject, addTaskToProject, updateTask };