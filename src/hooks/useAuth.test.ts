import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './useAuth';
import { auth } from '../services/firebase';

jest.mock('../services/firebase', () => ({
  auth: {
    GoogleAuthProvider: {
      credential: jest.fn()
    },
    signInWithCredential: jest.fn()
  }
}));

describe('useAuth', () => {
  test('signInWithGoogle signs in user with Google', async () => {
    const mockUser = { uid: '123', email: 'test@example.com' };
    (auth.signInWithCredential as jest.Mock).mockResolvedValue({ user: mockUser });

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(async () => {
      await result.current.signInWithGoogle('test-token');
    });

    expect(auth.GoogleAuthProvider.credential).toHaveBeenCalledWith('test-token');
    expect(auth.signInWithCredential).toHaveBeenCalled();
    expect(result.current.user).toEqual(mockUser);
  });

  test('handles signInWithGoogle error', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    (auth.signInWithCredential as jest.Mock).mockRejectedValue(new Error('Sign in error'));

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(async () => {
      await result.current.signInWithGoogle('test-token');
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error signing in with Google:', new Error('Sign in error'));
    consoleErrorSpy.mockRestore();
  });
});
