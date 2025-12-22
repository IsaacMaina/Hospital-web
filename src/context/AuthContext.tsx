"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define types
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  loading: boolean;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Fake user database
const fakeUsers: User[] = [
  {
    id: '1',
    name: 'Maina Isaac Wachira',
    email: 'mainaisaacwachira2000@gmail.com',
    role: 'patient'
  },
  {
    id: '2',
    name: 'Dr. Jane Mwangi',
    email: 'jane.mwangi@medicare-hospital.co.ke',
    role: 'doctor'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@medicare-hospital.co.ke',
    role: 'admin'
  }
];

// Fake password storage (in a real app, this would be hashed)
const fakePasswords: Record<string, string> = {
  'mainaisaacwachira2000@gmail.com': 'password123',
  'jane.mwangi@medicare-hospital.co.ke': 'doctorpass',
  'admin@medicare-hospital.co.ke': 'adminpass'
};

// Auth provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check if user exists and password matches
    if (fakePasswords[email] && fakePasswords[email] === password) {
      const foundUser = fakeUsers.find(user => user.email === email);
      if (foundUser) {
        setUser(foundUser);
        localStorage.setItem('user', JSON.stringify(foundUser));
        return true;
      }
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check if user already exists
    if (fakePasswords[email]) {
      return false; // User already exists
    }

    // Create new user
    const newUser: User = {
      id: `${fakeUsers.length + 1}`,
      name,
      email,
      role: 'patient'
    };

    fakeUsers.push(newUser);
    fakePasswords[email] = password;

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};