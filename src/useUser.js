// src/hooks/useUser.js
import { useContext } from "react";
import { UserContext } from "./UserContext";

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useTheme must be used within a UseProvider");
  }

  return context;
};

export default useUser;
