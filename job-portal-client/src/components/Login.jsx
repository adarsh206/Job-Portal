import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

import { getAuth, signOut  } from "firebase/auth";


const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
          

            const user = result.user;
            console.log(user)
         
          }).catch((error) => {
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    const handlelogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("Logout Successful!!")
          }).catch((error) => {
            // An error happened.
          });
    }
    
    
  return (
    <div className='mx-auto h-screen w-full flex space-x-10 items-center justify-center'>
        <div>
        <button className='bg-blue px-8 py-2 mb-4 block text-white' onClick={handleLogin}>Login</button>
        </div>
        
        <div>
        <button className='bg-blue px-8 py-2 mb-4 block text-white' onClick={handlelogout}>Logout</button>
        </div>
    </div>
    
  )
}

export default Login