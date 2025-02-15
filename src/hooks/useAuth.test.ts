import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './useAuth';
import { auth } from '../services/firebase';

jest.mock('../services/firebase', () => ({
  auth: {
    GoogleAuthProvider: jest.fn(),
    signInWithPopup: jest.fn(),
  },
}));

describe('useAuth hook', () => {
  it('should sign in with Google', async () => {
    const user = { uid: '123', email: 'test@example.com' };
    (auth.signInWithPopup as jest.Mock).mockResolvedValueOnce({ user });

    const wrapper = ({ children }) => <AuthProvider>{ children } </AuthProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.signInWithGoogle();
    });

    await waitForNextUpdate();

    expect(result.current.user).toEqual(user);
  });

  it('should handle sign in error', async () => {
    const error = new Error('Sign in failed');
    (auth.signInWithPopup as jest.Mock).mockRejectedValueOnce(error);

    const wrapper = ({ children }) => <AuthProvider>{ children } </AuthProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.signInWithGoogle();
    });

    await waitForNextUpdate();

    expect(result.current.user).toBeNull();
  });
});
