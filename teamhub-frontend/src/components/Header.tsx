import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from '../store'; // Import the store directly
import { logout } from '../store/slices/authSlice';

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const Header: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Clear user authentication state
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            TeamHub
          </Link>
        </h1>

        {/* Navigation Links */}
        <nav className="space-x-4">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
              >
                Signup
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;