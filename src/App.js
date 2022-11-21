import React, { useState } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import Main from './components/Main';
import './components/style.css';

const App = () => {
  const [stateAuth, setStateAuth] = useState();
  const response = (res) => {
    setStateAuth(res);
  };
  return (
    <div style={{ height: '100vh' }}>
      {!stateAuth ? (
        <Login response={response} />
      ) : (
        <div className="text-center">
          <Main />
          <Logout response={response} />
        </div>
      )}
    </div>
  );
};

export default App;
