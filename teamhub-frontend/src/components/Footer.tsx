import React from 'react';
import { useSelector } from 'react-redux';
import store from '../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const Footer: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // Do not render the footer if the user is authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <footer className="bg-gray-800 text-white py-4 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 TeamHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;