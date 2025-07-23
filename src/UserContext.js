// src/context/ThemeContext.js
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { username: "Heshan", password: "123", id: "A001", role: "admin" },
    { username: "Shahein", password: "456", id: "A002", role: "user" },
    { username: "Isuru", password: "789", id: "A003", role: "user" },
    { username: "Hashan", password: "258", id: "A004", role: "student" },
    { username: "Test", password: "123", id: "A005", role: "student" },
  ]);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
