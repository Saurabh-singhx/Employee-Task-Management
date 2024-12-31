import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../storage/Storage";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [userdata, setUserdata] = useState({ employees: [], admin: null });

  useEffect(() => {
    try {
      const [employees, admin] = getLocalStorage() || [[], null];
      setUserdata({ employees, admin });
    } catch (error) {
      console.error("Error fetching data from local storage:", error);
    }
  }, []);

  return (
    <AuthContext.Provider value={userdata}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
