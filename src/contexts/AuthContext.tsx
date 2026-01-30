"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/lib/api/auth';
import { storage } from '@/lib/utils/storage';
import { cookies } from '@/lib/utils/cookies';
import { AuthContextType, User, LoginCredentials } from '@/types/auth.types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  /**
   * Check if user is authenticated on mount
   */
  const checkAuth = useCallback(async (): Promise<boolean> => {
    try {
      const storedToken = storage.getToken();
      const storedUser = storage.getUser<User>();

      if (!storedToken || !storedUser) {
        setIsLoading(false);
        return false;
      }

      // Verify token is still valid
      try {
        const userData = await authApi.verifyToken(storedToken);
        setUser(userData);
        setToken(storedToken);
        setIsLoading(false);
        return true;
      } catch (error) {
        // Token is invalid, clear storage
        storage.clearAuth();
        cookies.remove('kaptia_token');
        setUser(null);
        setToken(null);
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Auth check error:', error);
      setIsLoading(false);
      return false;
    }
  }, []);

  /**
   * Login user
   */
  const login = async (credentials: LoginCredentials): Promise<void> => {
    try {
      const response = await authApi.login(credentials);
      
      // Store token and user data in both localStorage and cookies
      storage.setToken(response.token);
      storage.setUser(response.user);
      cookies.set('kaptia_token', response.token, 7); // 7 days expiration
      
      setToken(response.token);
      setUser(response.user);

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.response?.data?.error || 'Error al iniciar sesión');
    }
  };

  /**
   * Logout user
   */
  const logout = useCallback(() => {
    // Clear storage and cookies
    storage.clearAuth();
    cookies.remove('kaptia_token');
    
    // Clear state
    setUser(null);
    setToken(null);

    // Redirect to login
    router.push('/login');
  }, [router]);

  /**
   * Check authentication on mount
   */
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const value: AuthContextType = {
    user,
    token,
    isLoading,
    isAuthenticated: !!user && !!token,
    login,
    logout,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to use auth context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
