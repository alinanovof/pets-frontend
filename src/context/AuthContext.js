import React, { createContext, useState, useContext, useEffect } from "react";
import localforage from "localforage";
import { getUser } from "../api/api";

export const AuthContext = createContext({
  isInitiallyLoaded: false,
  token: "",
  saveToken: async (token) => {},
  removeToken: async () => {},
});

const tokenKey = "userToken";

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [isInitiallyLoaded, setIsInitiallyLoaded] = useState(false);
  const [token, setToken] = useState();
  const [admin, setAdmin] = useState();
  const [userId, setUserId] = useState();
  const saveToken = async (token) => {
    setToken(token);
    await localforage.setItem(tokenKey, token);
  };
  const removeToken = async () => {
    setToken();
    await localforage.removeItem(tokenKey);
  };

  getUser(token).then((data) => {
    setUserId(data.user.id)
    if (data.user.role === "admin") {
      setAdmin(true);
    } else if (data.user.role !== "admin") {
      setAdmin(false);
    }
  });

  useEffect(() => {
    localforage.getItem(tokenKey).then(token => {
      if (token) {
        setToken(token);
      }
      setIsInitiallyLoaded(true);
    });
  }, []);
 
  return (
    <AuthContext.Provider
      value={{
        token,
        isInitiallyLoaded,
        saveToken,
        removeToken,
        admin,
        userId
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
