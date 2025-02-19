import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../storage/Storage";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [userdata, setUserdata] = useState({ employees: [], admin: null });
  // console.log(userdata);
  const [checkdatalocal, setcheckdatalocal] = useState(false)
  useEffect(() => {
    try {
      setLocalStorage();
      const [employees, admin] = getLocalStorage() || [[], null];
      setUserdata({ employees, admin });
      
      
    } catch (error) {
      console.error("Error fetching data from local storage:", error);
    }
  }, []);
  // console.log(userdata);
  useEffect(() => {
    // console.log(userdata.employees)
    
    if (userdata.employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(userdata.employees));
      

    }

  }, [userdata]);

  return (
    <AuthContext.Provider value={{userdata,setUserdata}}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
