import React from 'react';
import { GoogleLogout } from 'react-google-login';

const Logout = (props) => {
  const clientId =
    '851709623364-rukiajb4u0eo26vntek8a87d19ibb5fh.apps.googleusercontent.com';
  const logout = () => {
    console.log('logout successful');
    // props.response();
  };
  return (
    <>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </>
  );
};

export default Logout;
