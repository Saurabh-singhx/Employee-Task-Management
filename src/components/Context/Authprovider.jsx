import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../storage/Storage";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [userdata, setUserdata] = useState({ employees: [], admin: null });
  // console.log(userdata);
  useEffect(() => {
    try {
      setLocalStorage();
      const [employees, admin] = getLocalStorage();
      setUserdata({ employees, admin });
    } catch (error) {
      console.error("Error fetching data from local storage:", error);
    }
  }, []);
  
  useEffect(() => {
    if (userdata.employees.length > 0) {
      localStorage.setItem("employees", JSON.stringify(userdata.employees));
       if((localStorage.getItem("loggedinuser") && JSON.parse(localStorage.getItem("loggedinuser")).role === "employee")){
        const loggedinuser = JSON.parse(localStorage.getItem("loggedinuser"));
        const employee = userdata.employees[[loggedinuser.data.id]-1];

        localStorage.setItem("loggedinuser", JSON.stringify({ role: "employee", data: employee }));
       }
    }

  }, [userdata]);

  return (
    <AuthContext.Provider value={{userdata,setUserdata}}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
