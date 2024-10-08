/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null);

  function logUserIn(user) {
    const emailParts = user.email.split("@");
    setUser({
      username: emailParts[0],
      account: "@" + emailParts[1],
    });
  }

  return (
    <UserContext.Provider value={{ user, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
}
