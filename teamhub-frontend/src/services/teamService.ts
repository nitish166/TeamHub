import axios from 'axios';

const API_URL = 'http://localhost:5000/api/team';

export const teamService = {
  createTeam: async (teamName: string, token: string) => {
    const response = await axios.post(
      `${API_URL}/create`,
      { teamName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  inviteUser: async (teamId: string, email: string, token: string) => {
    const response = await axios.post(
      `${API_URL}/invite`,
      { teamId, email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

  listTeamMembers: async (teamId: string, token: string) => {
    const response = await axios.get(`${API_URL}/${teamId}/members`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};