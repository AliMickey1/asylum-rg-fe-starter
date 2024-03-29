import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

// The logout method clears the application session
// and redirects to the Auth0 /v2/logout endpoint to clear the Auth0 session.
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        style={{
          backgroundColor: 'transparent',
          color: '#FD8960',
          padding: '45px',
          border: 'none',
        }}
        onClick={() => logout()}
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
