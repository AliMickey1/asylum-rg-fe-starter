import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user, isLoading, isAuthenticated);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);

  return (
    isAuthenticated && (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '30px',
          fontfamily: 'AcuminProItalic',
          fontWeight: '80px',
          fontSize: '15px',
        }}
      >
        <img style={{ padding: '20px' }} src={user.picture} alt={user.name} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <br />
          <h2 style={{ fontFamily: 'impact, fantasy' }}>{user.nickname}</h2>
          <ul>
            {Object.keys(user).map((objKey, i) => (
              <li key={i}>
                {objKey}: {user[objKey]}{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Profile;
