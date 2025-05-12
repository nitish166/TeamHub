import axios from 'axios';

import { API_BASE_URL } from './apiConfig';

const API_URL = `${API_BASE_URL}/auth`;

export const authService = {
  signup: async (name: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/signup`, { name, email, password });
    return response.data; // { success: true, token: '...' }
  },
  login: async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // { success: true, token: '...' }
  },
};