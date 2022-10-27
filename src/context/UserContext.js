import React, { createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user,setUser]=useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
   
    
    const googleLogIn=(Provider)=>{
       return signInWithPopup(auth,Provider);
    }
    const LogOut =()=>{
        return signOut(auth);
    }
 
  useEffect(()=>{
  const unsubcribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log("Current user changed",currentUser)
    })
    return ()=>{
        unsubcribe();
    }
  },[])
    const authInfo = { createUser, singIn ,user,googleLogIn,LogOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;