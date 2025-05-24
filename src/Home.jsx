// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/'); // Redirect to login
  };

  // Retrieve user from storage
  const user = localStorage.getItem('currentUser');

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
      <h2 className="mb-3">Welcome, {user || 'User'}!</h2>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default Home;