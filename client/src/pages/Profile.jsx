import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';
const Profile = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="profile">
      <h2>User Profile</h2>
     <Cards/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;