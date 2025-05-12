import axios from 'axios';

const API_URL = 'http://localhost:5000/api/project';

export const projectService = {
  createProject: async (teamId: string, projectName: string, token: string) => {
    const response = await axios.post(
      `${API_URL}/create`,
      { teamId, projectName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  addTask: async (projectId: string, taskData: any, token: string) => {
    const response = await axios.post(
      `${API_URL}/task`,
      { projectId, ...taskData },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  updateTask: async (taskId: string, updates: any, token: string) => {
    const response = await axios.put(`${API_URL}/task/${taskId}`, updates, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  listProjects: async (teamId: string, token: string) => {
    const response = await axios.get(`${API_URL}/list/${teamId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  // Add the missing getTasks function
  getTasks: async (projectId: string, token: string) => {
    const response = await axios.get(`${API_URL}/tasks/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  getProjectDetails: async (projectId: string, token: string) => {
    const response = await axios.get(`${API_URL}/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.project; // Assuming the API returns { success: true, project: { ... } }
  },
};