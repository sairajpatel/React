import React, { createContext, useEffect, useState } from 'react';
import { getLocalStoarge } from '../utils/localstorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const { employees } = getLocalStoarge();
        if (employees) {
            setUserData(employees);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
