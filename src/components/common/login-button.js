import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  // loginWithRedirect prompts a user to authenticate and provide consent for your React application
  // to access certain data on behalf of that user
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        style={{
          backgroundColor: 'transparent',
          color: '#FD8960',
          padding: '45px',
          border: 'none',
        }}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    )
  );
};

export default LoginButton;
