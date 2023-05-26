import { Card, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';

import Login from '../components/Login';
import Register from '../components/Register';

export default function LoginPortal() {
  const [hasAccount, setHasAccount] = useState<boolean>(false);

  return (
    <div className="container mx-auto flex justify-center before:block before:h-10 before:content-['']">
      <Card color="white" shadow={false} className="w-2/4 content-center">
        <Typography variant="h4" color="blue-gray">
          {hasAccount ? 'Sign In' : 'Sign Up'}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          {hasAccount
            ? 'Enter your details to login.'
            : 'Enter your details to register.'}
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          {hasAccount ? (
            <Login setHasAccount={setHasAccount} />
          ) : (
            <Register setHasAccount={setHasAccount} />
          )}
        </form>
      </Card>
    </div>
  );
}
