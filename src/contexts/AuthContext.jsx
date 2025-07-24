import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

// Function to load mock users from localStorage
const loadMockUsers = () => {
  try {
    const storedUsers = localStorage.getItem("mockUsers");
    if (storedUsers) {
      return JSON.parse(storedUsers);
    }
  } catch (e) {
    console.error("Failed to parse stored mock users from localStorage", e);
    localStorage.removeItem("mockUsers");
  }
  // Default user if no mock users are stored or if there's an error
  return [
    {
      username: "user",
      password: "password",
      id: "123",
      token: "mock-jwt-token-default",
    },
  ];
};

// Function to save mock users to localStorage
const saveMockUsers = (users) => {
  try {
    localStorage.setItem("mockUsers", JSON.stringify(users));
  } catch (e) {
    console.error("Failed to save mock users to localStorage", e);
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const mockUsersRef = React.useRef(loadMockUsers());

  // Effect to load the authenticated user from localStorage
  useEffect(() => {
    const storedAuthUser = localStorage.getItem("user");
    if (storedAuthUser) {
      try {
        setUser(JSON.parse(storedAuthUser));
      } catch (e) {
        console.error("Failed to parse stored authenticated user", e);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const foundUser = mockUsersRef.current.find(
          (u) =>
            u.username === credentials.username &&
            u.password === credentials.password
        );

        if (foundUser) {
          const loggedInUser = {
            ...foundUser,
            token: `mock-jwt-token-${Date.now()}`,
          };
          setUser(loggedInUser);
          localStorage.setItem("user", JSON.stringify(loggedInUser));
          navigate("/");
          resolve(true);
        } else {
          reject(new Error("Invalid username or password"));
        }
      }, 500);
    });
  };

  const signup = async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsersRef.current.find(
          (u) => u.username === userData.username
        );
        if (existingUser) {
          reject(new Error("Username already taken. Please choose another."));
          return;
        }

        if (userData.username && userData.password) {
          const newUser = {
            id: `mock-id-${Date.now()}`,
            username: userData.username,
            password: userData.password,
            token: `mock-jwt-token-signup-${Date.now()}`,
          };

          mockUsersRef.current.push(newUser);
          // Save the updated array to localStorage
          saveMockUsers(mockUsersRef.current);

          console.log("Mock Signup successful for:", newUser.username);
          navigate("/login");
          resolve(true);
        } else {
          reject(new Error("Username and password are required"));
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
