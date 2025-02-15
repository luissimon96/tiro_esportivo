import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useAuth } from '../../hooks/useAuth';

const LoginPage: React.FC = () => {
  const { signInWithGoogle } = useAuth();

  const handleLoginSuccess = (response: any) => {
    signInWithGoogle(response.tokenId);
  };

  const handleLoginFailure = (response: any) => {
    console.error('Login failed:', response);
  };

  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default LoginPage;
