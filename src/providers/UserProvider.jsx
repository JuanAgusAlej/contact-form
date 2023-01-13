import React, { createContext, useContext, useState } from 'react';

const userDataContex = createContext();
const userDataToggleContex = createContext();

export const useUserDataContex = () => {
  return useContext(userDataContex);
};

export const useUserDataToggleContex = () => {
  return useContext(userDataToggleContex);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <userDataContex.Provider value={user}>
      <userDataToggleContex.Provider value={setUser}>
        {children}
      </userDataToggleContex.Provider>
    </userDataContex.Provider>
  );
};
