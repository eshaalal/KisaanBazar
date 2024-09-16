import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import GalleryVideo from './pages/GalleryVideo';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import SignupLogin from './pages/SignupLogin';
import Profile from './pages/Profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    console.log('Logging in as:', role);
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    console.log('Logging out');
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} userRole={userRole} />
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} userRole={userRole} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery-video" element={<GalleryVideo />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route 
            path="/signup-login" 
            element={<SignupLogin onLogin={handleLogin} />} 
          />
          <Route 
            path="/profile" 
            element={<Profile onLogout={handleLogout} userRole={userRole} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;