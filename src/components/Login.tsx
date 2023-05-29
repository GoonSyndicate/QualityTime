import { Button, Input } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import { useAuthentication } from '@/utils/authentication';

interface LoginProps {
  setHasAccount: (hasAccount: boolean) => void;
}

export default function Login({ setHasAccount }: LoginProps) {
  const router = useRouter();
  const { handleLogin } = useAuthentication();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // prevent default form submission behavior

    // replace "username" and "password" with actual values from your form fields
    const success = await handleLogin(email, password);
    if (success) {
      router.push('/'); // redirects to index if login was successful
    } else {
      // handle login error
    }
  };

  return (
    <div>
      <div
        className="mb-4 flex cursor-pointer items-center"
        onClick={() => setHasAccount(false)}
      >
        <FaArrowLeft />
        <span className="ml-2">Return to Registration</span>
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="mt-6" fullWidth onClick={onLogin}>
          Login
        </Button>
      </form>
    </div>
  );
}
