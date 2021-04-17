import React, {createContext, useState, useContext, useEffect} from 'react';
import * as auth from '../api/auth';

export const AuthContext = createContext();

export const useAuth = () =>{
    return useContext(AuthContext)
}

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const signup = (email, password, fname, lname, phone) => {
        return auth.signup(email, password, fname, lname, phone)
        .then((data) => {
            setUser(data.user)
        })
        .catch((e) =>{
            throw e;
        })
    }
    
    const login = (email, password) => {
        return auth.login(email,password)
        .then((data) =>{
            setUser(data.user);
        })
        .catch((e) =>{
            throw e;
        })
    }
    
    return(
        <AuthContext.Provider
        value={{
            user,
            loading,
            signup,
            login,
            setUser
        }}
        >
        </AuthContext.Provider>
    )
}

export { AuthContextProvider }