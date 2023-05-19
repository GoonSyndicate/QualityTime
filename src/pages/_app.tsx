import '../styles/global.css';

import type { AppProps } from 'next/app';
import { useState } from 'react';

import LoginPage from './login';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <>{isAuthenticated ? <Component {...pageProps} /> : <LoginPage />}</>;
};

export default MyApp;
