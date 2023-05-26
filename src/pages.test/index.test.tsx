import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import LoginPortal from '../pages/loginPortal';

describe('Login', () => {
  it('renders the Sign Up title', () => {
    render(<LoginPortal />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});
