import React from 'react';
import { AuthProvider } from './hooks/useAuth';
import LoginPage from './presentation/pages/LoginPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
};

export default App;
