import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';

const Navbar = ({ isLoggedIn, userName, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(); // Redux logout
    navigate({ to: '/' }); // Redirect to home page
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition">
            🔗 URL Shortener
          </Link>

          {/* Right: Auth Section */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <span className="text-gray-700 text-sm animate-fade-in">
  <span className="mr-1">Welcome,</span>
  <span className="font-semibold text-blue-600  overflow-hidden whitespace-nowrap border-r-2 border-blue-600 pr-1">
    {userName || 'User'}
  </span>
</span>

                <button
                  onClick={handleLogoutClick}
                  className="bg-green-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
