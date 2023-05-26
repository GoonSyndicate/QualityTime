import { Button, Checkbox, Input, Typography } from '@material-tailwind/react';
import React from 'react';

interface RegisterProps {
  setHasAccount: (hasAccount: boolean) => void;
}

export default function Register({ setHasAccount }: RegisterProps) {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-6">
        <Input size="lg" label="Name" />
        <Input size="lg" label="Email" />
        <Input type="password" size="lg" label="Password" />
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
      <Button className="mt-6" fullWidth>
        Register
      </Button>
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
