import axios from 'axios';
import { API_BASE_URL } from './apiConfig';



const API_URL = `${API_BASE_URL}/team`;

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

  listTeams: async (token: string) => {
    const response = await axios.get(`${API_URL}/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};