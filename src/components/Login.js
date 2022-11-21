import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { Container, Row, Col } from 'react-bootstrap';

const Login = (props) => {
  const clientId =
    '851709623364-rukiajb4u0eo26vntek8a87d19ibb5fh.apps.googleusercontent.com';
  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({ clientId: clientId });
    });
  });

  const responseGoogle = (response) => {
    console.log(response);
    props.response(response);
  };
  return (
    <Container fluid={true} className="bgimage w-100">
      <Row>
        <Col className="text-center">
          <p className="text-white my-5 titletext">Dive into knowledge</p>
          <GoogleLogin
            className="pulse"
            style={{ height: '100vh' }}
            clientId={clientId}
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
