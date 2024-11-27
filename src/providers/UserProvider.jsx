/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext(null);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "PH",
    email: "user@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
