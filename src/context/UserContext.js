import React, { createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user,setUser]=useState(null);
  const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
   
    
    const googleLogIn=(Provider)=>{
        setLoading(true);
       return signInWithPopup(auth,Provider);
    }
    const LogOut =()=>{
        return signOut(auth);
    }
 
  useEffect(()=>{
  const unsubcribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
        
      
    })
    return ()=>{
        unsubcribe();
    }
  },[])
    const authInfo = { loading,createUser, singIn ,user,googleLogIn,LogOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;