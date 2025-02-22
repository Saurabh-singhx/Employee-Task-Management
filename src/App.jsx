import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Employee from './components/dashboard/Employee';
import { AuthContext } from './components/Context/Authprovider';
import Authdashboard from './components/dashboard/Authdashboard';
import { setLocalStorage } from './components/storage/Storage';
import { Toaster } from 'react-hot-toast';
import { use } from 'react';

function App() {
  const { userdata, setUserdata } = useContext(AuthContext); // Correct context access
  const [user, setUser] = useState(null);
  const [loggedinuserdata, setLoggedinuserdata] = useState(null);
  // console.log(userdata);
  useEffect(() => {
    const loggedinuserF = userdata.loggedinuser;
    if (loggedinuserF) {
      const userData = userdata.loggedinuser;
      setUser(userData.role);
      setLoggedinuserdata(userData.data || null);
    }
  }, [userdata]);

  // console.log(userdata.admin)

  const handlelogin = (email, pass) => {
    if (email === 'admin@mail.com' && pass === '123') {
      setUser('admin');
      const Admin = userdata.admin[0];
      // console.log(Admin)
      setLoggedinuserdata(Admin);
      // localStorage.setItem('loggedinuser', JSON.stringify({ role: 'admin' }));
      userdata.loggedinuser = { role: 'admin' ,data: Admin};
      setUserdata({ ...userdata });
    } else if (userdata) {
      const employee = userdata.employees.find((e) => email === e.email && pass === e.password);
      if (employee) {
        setUser('employee');
        setLoggedinuserdata(employee);
        // localStorage.setItem('loggedinuser', JSON.stringify({ role: 'employee', data: employee }));
        userdata.loggedinuser = { role: 'employee', data: employee };
        setUserdata({ ...userdata });
      } else {
        alert('Wrong credentials');
      }
    } else {
      alert('Wrong credentials');
    }
  };
  // console.log(user);
  // console.log(loggedinuserdata)
  // setUser("employee")
  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ''}
      {user === 'admin' ? (
        <Authdashboard changeUser={setUser} data={loggedinuserdata}/>
      ) : user === 'employee' ? (
        <Employee data={loggedinuserdata} changeUser={setUser} setLog={setLoggedinuserdata}/>
      ) : null}
      <Toaster />
    </>
  );
}

export default App;
