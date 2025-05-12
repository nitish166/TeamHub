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
  // Validate that the projectId exists
  const project = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!project) {
    throw new Error('Invalid projectId: Project does not exist');
  }

  // Create the task
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

// List all projects for a team
const listProjects = async (teamId) => {
  const projects = await prisma.project.findMany({
    where: { teamId },
    select: {
      id: true,
      name: true,
    },
  });
  return projects;
};

// List all tasks for a project
const listTasks = async (projectId) => {
  const tasks = await prisma.task.findMany({
    where: { projectId },
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      dueDate: true,
      assignedTo: {
        select: { id: true, name: true },
      },
    },
  });
  return tasks;
};

const getProjectDetails = async (projectId) => {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: {
      id: true,
      name: true,
      teamId: true, // Include the teamId
    },
  });

  if (!project) {
    throw new Error('Project not found');
  }

  return project;
};

module.exports = { createProject, addTaskToProject, updateTask, listProjects, listTasks, getProjectDetails };