import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;