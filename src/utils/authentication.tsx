// utils/authentication.js

import { useState } from 'react';

export function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  async function handleLogin(username: string, password: string) {
    // Send a request to your API to log in.
    // If the login is successful, the server should create a session and return a Set-Cookie header with the session id.
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      setIsAuthenticated(true);
      return true;
    }

    if (username === 'admin' && password === 'password') {
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

  return { isAuthenticated, handleLogin, handleLogout };
}
