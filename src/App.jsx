import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login'
import Employee from './components/dashboard/Employee'
import { getLocalStorage, setLocalStorage } from './components/storage/Storage'
import { AuthContext } from './components/Context/Authprovider'
import Authdashboard from './components/dashboard/Authdashboard'

function App() {
  setLocalStorage();
  const Authdata = useContext(AuthContext)
  const [loggedinuserdata, setLoggedinuserdata] = useState(null)
  useEffect(()=>{
    
    const loggedinuser = localStorage.getItem("loggedinuser")
      if(loggedinuser){
        const userData = JSON.parse(loggedinuser)
        setUser(userData.role)
        setLoggedinuserdata(userData.data)
      }
    
  },[])
  
  const [user, setUser] = useState(null)

  const handlelogin=(email,pass)=>{

    if(email == 'admin@mail.com' && pass == '123'){
      setUser('admin')
      localStorage.setItem('loggedinuser',JSON.stringify({role:'admin'}))
    }else if(Authdata){
      const employee = Authdata.employees.find((e) =>email == e.email && pass == e.password)
      if(employee){
        setUser('employee')
        setLoggedinuserdata(employee)
        localStorage.setItem('loggedinuser',JSON.stringify({role:'employee',data:employee}))
      }
    }else{
      alert('Wrong credentials')
    }
  }
  return (
    <>
      {!user ? <Login handlelogin={handlelogin}/>:''}
      {user == 'admin'?<Authdashboard changeUser={setUser}/>:(user == 'employee' ? <Employee data={loggedinuserdata} changeUser={setUser}/>:null)}
    </>
  )
}

export default App
