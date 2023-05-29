import { Button, Checkbox, Input, Typography } from '@material-tailwind/react';
import router from 'next/router';
import { useState } from 'react';

import { useAuthentication } from '@/utils/authentication';

interface RegisterProps {
  setHasAccount: (hasAccount: boolean) => void;
}

export default function Register({ setHasAccount }: RegisterProps) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { handleSignUp } = useAuthentication();

  const onSignUp = async (event: React.FormEvent) => {
    event.preventDefault(); // prevent default form submission behavior

    // replace "username" and "password" with actual values from your form fields
    const success = await handleSignUp(email, password);
    if (success) {
      router.push('/'); // redirects to index if sign up was successful
    } else {
      // handle signup error
    }
  };

  return (
    <div>
      <form>
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
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
        <div className="inline-flex items-center">
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
        </div>
        <Button className="mt-6" fullWidth onClick={onSignUp}>
          Register
        </Button>
      </form>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{' '}
        <a
          href="#"
          onClick={() => setHasAccount(true)}
          className="font-medium text-blue-500 transition-colors hover:text-blue-700"
        >
          Sign In
        </a>
      </Typography>
    </div>
  );
}
