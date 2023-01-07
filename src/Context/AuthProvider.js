import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Creating new user 
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // Signin for existing user
    const signInAuth = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }
    // Userinformation
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }


    // Signout user
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unSubscribe();
    }, [])

    const authInformation = {
        createUser,
        signInAuth,
        user,
        logOut,
        updateUser,

    }

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;