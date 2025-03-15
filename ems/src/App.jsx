import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStoarge, setLocalStoarge } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'

function App() {
 

const [user,setUser]=useState(null)
const [loggedInUserData,setLoggedInUserData]=useState();
const authData=useContext(AuthContext);
setLocalStoarge();
useEffect(()=>{
const loggedInUser=localStorage.getItem('loggedInUser');
if(loggedInUser){
  const userData=JSON.parse(loggedInUser);
  setUser(userData.role);
  setLoggedInUserData(userData.data);
}
},[]);
console.log(authData?.employees);
const handleLogin=(email,password)=>{
  if(email=='admin@gmail.com'&&password=='123'){
    setUser("admin");
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }
  else if(authData){
    const employee=authData.employees.find((e)=>email==e.email && e.password==password);
    if(employee){
      setUser("employee");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
      setLoggedInUserData(employee);
    }
   
    
  }
  else{
    alert("Invalid Creditinals please check it");
  }
console.log(loggedInUserData);
}


  return (
    <>
    {!user ?<Login handleLogin={handleLogin}/>: ''}
    {user=='admin' ? <AdminDashboard data={loggedInUserData}/> : user=='employee' ?<EmployeeDashboard data={loggedInUserData}/>:null}
    </> 
  )
}

export default App
