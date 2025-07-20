"use client";

import { getCurrentUser, loginUser } from "@/api/auth/login";
import { logoutUser } from "@/api/auth/logout";
import axiosInstance from "@/lib/axiosInstance";
import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: number;
  username: string;
  email: string;
  name: string;
  number: string;
  tutor_name: string;
  tutor_number: string;
  school: string;
};
type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  isLoggedIn: boolean;
  logout: () => void;
  refetchUserInformation: ()=>void
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchUserInformation();
  }, []);

  async function fetchUserInformation() {
    const user = await getCurrentUser();
    console.log("logged in user", user?.username);
    setUser(user);
    setIsLoggedIn(true);
  }

  const login = async (username: string, password: string) => {
    try {
      await loginUser({ username, password });
      fetchUserInformation();
    } catch (error) {
      console.error("Login failed:", error);
      // tampilkan error ke user jika perlu
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(user != null);
    console.log("user is changed, user=", user?.username);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, refetchUserInformation:fetchUserInformation }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
