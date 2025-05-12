const projectService = require('../services/project.service');

const createProject = async (req, res) => {
  try {
    const { teamId, projectName } = req.body;
    const project = await projectService.createProject(teamId, projectName);
    res.status(201).json({ success: true, project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const addTaskToProject = async (req, res) => {
  try {
    const { projectId, title, description, status, assignedToId, dueDate } = req.body;
    const task = await projectService.addTaskToProject(projectId, {
      title,
      description,
      status,
      assignedToId,
      dueDate,
    });
    res.status(201).json({ success: true, task });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const updates = req.body;
    const task = await projectService.updateTask(taskId, updates);
    res.status(200).json({ success: true, task });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const listProjects = async (req, res) => {
  try {
    const { teamId } = req.params;
    const projects = await projectService.listProjects(teamId);
    res.status(200).json({ success: true, projects });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const listTasks = async (req, res) => {
  try {
    const { projectId } = req.params;
    const tasks = await projectService.listTasks(projectId);
    res.status(200).json({ success: true, tasks });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const getProjectDetails = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await projectService.getProjectDetails(projectId);
    res.status(200).json({ success: true, project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { createProject, addTaskToProject, updateTask, listProjects, listTasks, getProjectDetails };