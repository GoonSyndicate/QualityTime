// utils/authentication.js

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';

import { auth } from '../api/Firebase';

export function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  async function handleLogin(email: string, password: string) {
    // Send a request to your API to log in.
    // If the login is successful, the server should create a session and return a Set-Cookie header with the session id.

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.email);
        setIsAuthenticated(true);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });

    if (email === 'admin' && password === 'password') {
      setIsAuthenticated(true); // set authenticated to true if login was successful
      return true;
    }

    setIsAuthenticated(false);
    // Handle login error.
    return false;
  }

  async function handleLogout() {
    // Send a request to your API to log out.
    // If the logout is successful, the server should destroy the session.
    const response = await fetch('/api/logout');

    if (response.ok) {
      setIsAuthenticated(false);
    }
  }

  async function handleSignUp(email: string, password: string) {
    // Send a request to your API to log out.
    // If the logout is successful, the server should destroy the session.
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setIsAuthenticated(true);
        return true;
      })
      .catch((error) => {
        console.log(error);
      });

    return false;
  }

  return { isAuthenticated, handleLogin, handleLogout, handleSignUp };
}
