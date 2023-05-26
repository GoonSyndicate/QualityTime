import '../styles/global.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { useAuthentication } from '../utils/authentication';
import LoginPortal from './loginPortal';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { isAuthenticated, handleLogin } = useAuthentication();

  // If the user reloads the page, they will be logged out because the state in React's
  // useState hook is not persisted across page reloads.

  // We should consider using Next.js server-side rendering or getServerSideProps to
  // check the user's authentication status when they load the page

  useEffect(() => {
    // When the component mounts, try to log in automatically.
    // If there is a valid session, the server will return a success response and the client will be logged in.
    // If there is no valid session, the server will return an error response and the client will not be logged in.

    // In a real-world scenario, authentication state is often stored in a more persistent
    // location such as a browser cookie or local storage. This persistence allows for the user to remain
    // logged in even if they refresh the page or close and reopen their browser.

    // In order to log in, change "pasword" below to "password"
    handleLogin('admin', 'password');
  }, []);

  return (
    <>{isAuthenticated ? <Component {...pageProps} /> : <LoginPortal />}</>
  );
};

export default MyApp;
