import { createContext, useState } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState([

    { username: "Heshan", password: "123", id: "A001", role: "admin" },
    { username: "Shahein", password: "456", id: "A002", role: "user" },
    { username: "Isuru", password: "789", id: "A003", role: "user" },
    { username: "Hashan", password: "258", id: "A004", role: "student" },
    { username: "Test", password: "214", id: "A005", role: "student" },
  ]);

    const login = (roleData) => {
    // Implement login logic here (e.g., API call)
    setRole(roleData);
  };

  const logout = () => {
    // Implement logout logic here
    setRole(null);
  };


  return (
    <RoleContext.Provider value={{ role, login, logout }}>
      {children}
    </RoleContext.Provider>
  );
};

