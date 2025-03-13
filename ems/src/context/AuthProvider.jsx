import React, { createContext, useEffect, useState } from 'react'
import { getLocalStoarge } from '../utils/localstorage';

export const AuthContext=createContext();

function AuthProvider({children}) {
    const [userData,setUserData]=useState(null);
    
    useEffect(()=>{
        const {employees,admin} =getLocalStoarge();
    setUserData({employees,admin});
    
    },[]);
    return (
       <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
       </div>
    )
}

export default AuthProvider
