'use client';

import { loginUser } from '@/api/auth/login';
import { logoutUser } from '@/api/auth/logout';
import { getMe } from '@/api/auth/me';
import React, { createContext, useContext, useEffect, useState } from 'react';


type User = { id: number; username: string; email: string };
type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Cek login saat inisialisasi
  useEffect(() => {
    (async () => {
      try {
        const me = await getMe();
        setUser(me);
      } catch {
        setUser(null);
      }
    })();
  }, []);

  const login = async (username: string, password: string) => {
    const { user } = await loginUser({ username, password });
    setUser(user); 
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
