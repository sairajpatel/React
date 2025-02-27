import React from 'react'
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'


export default  function  Protected({children,authentication=true}) {
    const navigate=useNavigate();
    const [loading,setLoading]=useState(true);
    const authStatus=useSelector(state=>state.auth.isAuthenticated);
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
    },[])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}


