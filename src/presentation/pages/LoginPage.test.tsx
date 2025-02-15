import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GoogleLogin } from 'react-google-login';
import LoginPage from './LoginPage';
import { AuthProvider } from '../../hooks/useAuth';

jest.mock('react-google-login', () => ({
  GoogleLogin: jest.fn(() => <div>Google Login Button</div>)
}));

describe('LoginPage', () => {
  test('renders login page with Google login button', () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Google Login Button')).toBeInTheDocument();
  });

  test('calls signInWithGoogle on successful login', () => {
    const mockSignInWithGoogle = jest.fn();
    jest.spyOn(require('../../hooks/useAuth'), 'useAuth').mockReturnValue({
      signInWithGoogle: mockSignInWithGoogle
    });

    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Google Login Button'));
    expect(mockSignInWithGoogle).toHaveBeenCalled();
  });

  test('handles login failure', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    const googleLoginProps = (GoogleLogin as jest.Mock).mock.calls[0][0];
    googleLoginProps.onFailure('Login failed');

    expect(consoleErrorSpy).toHaveBeenCalledWith('Login failed:', 'Login failed');
    consoleErrorSpy.mockRestore();
  });
});
