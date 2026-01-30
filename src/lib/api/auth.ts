import axios from 'axios';
import { LoginCredentials, LoginResponse, User } from '@/types/auth.types';

// Configure your API base URL here
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests automatically
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('kaptia_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const authApi = {
  /**
   * Login user with credentials
   */
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post('/login', {
      email: credentials.username, // Adjust based on your backend
      password: credentials.password,
    });
    return response.data;
  },

  /**
   * Verify token validity and get user data
   */
  verifyToken: async (token: string): Promise<User> => {
    const response = await api.get('/verify', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user;
  },

  /**
   * Get current user data
   */
  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/me');
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    await api.post('/logout');
  },
};

export default api;
