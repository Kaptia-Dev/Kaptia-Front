// Authentication related types
export interface User {
  idUsers: number;
  name: string;
  email: string;
  profilePicture: string;
  role: number;
  registrationDate: string;
  userRole: number;
  enterpriseId: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<boolean>;
}
