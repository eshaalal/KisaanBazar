import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import GalleryVideo from './pages/GalleryVideo';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import SignupLogin from './pages/SignupLogin';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery-video" element={<GalleryVideo />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup-login" element={<SignupLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
