import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStoarge, setLocalStoarge } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'

function App() {
const [user,setUser]=useState(null)
const authData=useContext(AuthContext);
console.log(authData.employees)
const handleLogin=(email,password)=>{
  if(email=='admin@gmail.com'&&password=='123'){
    setUser("admin");
  }
  else if(authData&&authData.employees.find((e)=>{email==e.email&&e.password==password})){
    setUser("user");
  }
  else{
    alert("Invalid Creditinals please check it");
  }

}


  return (
    <>
    {!user ?<Login handleLogin={handleLogin}/>: ''}
    {user=='admin' ? <AdminDashboard/> : user=='user' ?<EmployeeDashboard/>:null}
    </> 
  )
}

export default App
