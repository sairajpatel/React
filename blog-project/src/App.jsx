import { useEffect, useState } from 'react'
import authservice from './AppWrite/auth';
import './App.css'
import { useDispatch } from 'react-redux'
import {login,logout} from './Store/authSlice'
import { Header,Footer
  
 } from './Components/index'


function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
    authservice.getUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  
  },[]);
  return  !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full-block'>
        <Header/>
        <main>

        </main>
        <Footer/>
      </div>
    </div>
  ):null;


}

export default App
