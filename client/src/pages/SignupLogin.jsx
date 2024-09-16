import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignupLogin.css';
import './Home';

const SignupLogin = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [role, setRole] = useState('contractor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    aadharNumber: '',
    phoneNumber: '',
    companyName: '',
    companyLicence: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    plantsNeeded: '',
    address: '',
    plantType: '',
    location: '',
    landSize: '',
    landImage: '',
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let dataToSend = { ...formData };
      if (role === 'contractor') {
        dataToSend.companyAddress = {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode
        };
        delete dataToSend.street;
        delete dataToSend.city;
        delete dataToSend.state;
        delete dataToSend.zipCode;
        
        dataToSend.plantsNeeded = formData.plantsNeeded.split(',').map(plant => plant.trim());
      } else if (role === 'farmer') {
        dataToSend.companyName = undefined;
        dataToSend.companyLicence = undefined;
      }
      const url = role === 'contractor' ? 'http://localhost:5000/api/contractors/register' : 'http://localhost:5000/api/farmers/register';
      const res = await axios.post(url, dataToSend);
      alert(res.data.message);

      console.log('Registering as:', role);
      onLogin(role); // Pass the role when calling onLogin
      console.log('User registered and logged in');
      navigate('/', { state: { role } });

    } catch (err) {
      alert('Error during registration: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = role === 'contractor' ? 'http://localhost:5000/api/contractors/login' : 'http://localhost:5000/api/farmers/login';
      const res = await axios.post(url, {
        email: formData.email,
        password: formData.password,
      });
      alert(res.data.message);

      console.log('Logging in as:', role);
      onLogin(role); // Pass the role when calling onLogin
      console.log('User logged in');
      navigate('/', { state: { role } });

    } catch (err) {
      alert('Error during login: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="auth-form">
      <h2>{isRegister ? 'Register' : 'Login'} as {role}</h2>

      <div className="role-options">
        <label>
          <input
            type="radio"
            name="role"
            value="contractor"
            checked={role === 'contractor'}
            onChange={() => setRole('contractor')}
          />
          Contractor
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="farmer"
            checked={role === 'farmer'}
            onChange={() => setRole('farmer')}
          />
          Farmer
        </label>
      </div>

      <form onSubmit={isRegister ? handleRegister : handleLogin}>
        {isRegister && (
          <>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            <input
              type="text"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleInputChange}
              placeholder="Aadhar Number"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone Number"
              required
            />
          </>
        )}

        {!isRegister && (
          <>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </>
        )}

        {isRegister && role === 'contractor' && (
          <>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              required
            />
            <input
              type="text"
              name="companyLicence"
              value={formData.companyLicence}
              onChange={handleInputChange}
              placeholder="Company Licence"
              required
            />
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              placeholder="Street"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              placeholder="State"
            />
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Zip Code"
            />
            <input
              type="text"
              name="plantsNeeded"
              value={formData.plantsNeeded}
              onChange={handleInputChange}
              placeholder="Plants Needed (comma-separated)"
            />
          </>
        )}

        {isRegister && role === 'farmer' && (
          <>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              required
            />
            <input
              type="text"
              name="plantType"
              value={formData.plantType}
              onChange={handleInputChange}
              placeholder="Plant Type"
              required
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Location"
              required
            />
            <input
              type="text"
              name="landSize"
              value={formData.landSize}
              onChange={handleInputChange}
              placeholder="Land Size"
              required
            />
            <input
              type="text"
              name="landImage"
              value={formData.landImage}
              onChange={handleInputChange}
              placeholder="Land Image URL"
              required
            />
          </>
        )}

        <button type="submit">
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>

      <button
        type="button"
        className="switch-btn"
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default SignupLogin;
