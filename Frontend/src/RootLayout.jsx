// import React from 'react'
// import HomePage from './pages/HomePage'
// import LoginForm from './components/LoginForm'
// import AuthPage from './pages/AuthPage'
// import { Outlet } from '@tanstack/react-router'
// import Navbar from './components/NavBar'

// const RootLayout = () => {
//   return (
//     <>
//       <Navbar/>
//       <Outlet/>
      
      
//     </>
//   )
// }

// export default RootLayout
import React from 'react';
import { Outlet } from '@tanstack/react-router';
import Navbar from './components/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/slice/authSlice.js';

const RootLayout = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  console.log("User from Redux:", user); // ✅ Debug

  const isLoggedIn = !!user;
  const userName = user?.username || user?.name || user?.email || 'User';

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
      <Outlet />
    </>
  );
};

export default RootLayout;
