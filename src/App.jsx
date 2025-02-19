import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import Employee from './components/dashboard/Employee';
import { AuthContext } from './components/Context/Authprovider';
import Authdashboard from './components/dashboard/Authdashboard';
import { setLocalStorage } from './components/storage/Storage';
import { Toaster } from 'react-hot-toast';

function App() {
  const { userdata, setUserdata } = useContext(AuthContext); // Correct context access
  const [user, setUser] = useState(null);
  const [loggedinuserdata, setLoggedinuserdata] = useState(null);
  
  useEffect(() => {
     // Correct function call
     
    const loggedinuser = localStorage.getItem('loggedinuser');
    if (loggedinuser) {
      const userData = JSON.parse(loggedinuser);
      setUser(userData.role);
      setLoggedinuserdata(userData.data || null);
    }
  }, []);

  const handlelogin = (email, pass) => {
    if (email === 'admin@mail.com' && pass === '123') {
      setUser('admin');
      localStorage.setItem('loggedinuser', JSON.stringify({ role: 'admin' }));
    } else if (userdata) {
      const employee = userdata.employees.find((e) => email === e.email && pass === e.password);
      if (employee) {
        setUser('employee');
        setLoggedinuserdata(employee);
        localStorage.setItem('loggedinuser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Wrong credentials');
      }
    } else {
      alert('Wrong credentials');
    }
  };

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ''}
      {user === 'admin' ? (
        <Authdashboard changeUser={setUser} />
      ) : user === 'employee' ? (
        <Employee data={loggedinuserdata} changeUser={setUser} />
      ) : null}
      <Toaster/>
    </>
  );
}

export default App;
