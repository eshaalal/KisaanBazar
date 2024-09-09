import React, { useState } from 'react';
import './SignupLogin.css';
import { registerFarmer, registerBuyer, registerContractor } from '../api/api'; // Adjust the import path as needed

const SignupLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('farmer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    aadharNumber: '',
    plantType: '',
    location: '',
    landSize: '',
    landImage: '',
    plantNeeded: '',
    companyName: '',
    companyLicence: '',
    companyAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
    plantsNeeded: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleToggle = () => setIsLogin(!isLogin);

  const handleUserTypeChange = (e) => setUserType(e.target.value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('companyAddress.')) {
      const field = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        companyAddress: {
          ...prevData.companyAddress,
          [field]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isLogin) {
        // Handle login logic if needed
        return;
      }
      switch (userType) {
        case 'farmer':
          response = await registerFarmer(formData);
          break;
        case 'buyer':
          response = await registerBuyer(formData);
          break;
        case 'contractor':
          response = await registerContractor(formData);
          break;
        default:
          throw new Error('Invalid user type');
      }

      if (response.success) {
        setSuccess('Registration successful!');
        setError('');
        setFormData({ // Reset form data if needed
          name: '',
          email: '',
          password: '',
          phoneNumber: '',
          aadharNumber: '',
          plantType: '',
          location: '',
          landSize: '',
          landImage: '',
          plantNeeded: '',
          companyName: '',
          companyLicence: '',
          companyAddress: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
          },
          plantsNeeded: '',
        });
      } else {
        throw new Error(response.message || 'Registration failed');
      }
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div className="signup-login-container">
      <div className="auth-switch">
        <button className={`auth-button ${isLogin ? 'active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
        <button className={`auth-button ${!isLogin ? 'active' : ''}`} onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>

      <div className="auth-form">
        {isLogin ? (
          <LoginForm />
        ) : (
          <SignupForm
            userType={userType}
            onUserTypeChange={handleUserTypeChange}
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            error={error}
            success={success}
          />
        )}
      </div>
    </div>
  );
};

const LoginForm = () => (
  <form className="login-form">
    <h2>Login</h2>
    <label>
      Email:
      <input type="email" name="email" required />
    </label>
    <label>
      Password:
      <input type="password" name="password" required />
    </label>
    <button type="submit">Login</button>
  </form>
);

const SignupForm = ({ userType, onUserTypeChange, formData, onChange, onSubmit, error, success }) => (
  <form className="signup-form" onSubmit={onSubmit}>
    <h2>Sign Up</h2>
    <div className="user-type-selector">
      <label>
        <input
          type="radio"
          value="farmer"
          checked={userType === 'farmer'}
          onChange={onUserTypeChange}
        />
        Farmer
      </label>
      <label>
        <input
          type="radio"
          value="buyer"
          checked={userType === 'buyer'}
          onChange={onUserTypeChange}
        />
        Buyer
      </label>
      <label>
        <input
          type="radio"
          value="contractor"
          checked={userType === 'contractor'}
          onChange={onUserTypeChange}
        />
        Contractor
      </label>
    </div>

    <label>
      Name:
      <input type="text" name="name" value={formData.name} onChange={onChange} required />
    </label>
    <label>
      Email:
      <input type="email" name="email" value={formData.email} onChange={onChange} required />
    </label>
    <label>
      Password:
      <input type="password" name="password" value={formData.password} onChange={onChange} required />
    </label>
    <label>
      Phone Number:
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={onChange} required />
    </label>
    <label>
      Aadhar Number:
      <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={onChange} required />
    </label>

    {userType === 'farmer' && (
      <>
        <label>
          Plant Type:
          <input type="text" name="plantType" value={formData.plantType} onChange={onChange} required />
        </label>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={onChange} required />
        </label>
        <label>
          Land Size:
          <input type="number" name="landSize" value={formData.landSize} onChange={onChange} required />
        </label>
        <label>
          Land Image (URL or base64):
          <input type="text" name="landImage" value={formData.landImage} onChange={onChange} />
        </label>
      </>
    )}

    {userType === 'buyer' && (
      <>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={onChange} required />
        </label>
        <label>
          Plant Needed:
          <input type="text" name="plantNeeded" value={formData.plantNeeded} onChange={onChange} required />
        </label>
      </>
    )}

    {userType === 'contractor' && (
      <>
        <label>
          Company Name:
          <input type="text" name="companyName" value={formData.companyName} onChange={onChange} required />
        </label>
        <label>
          Company License:
          <input type="text" name="companyLicence" value={formData.companyLicence} onChange={onChange} required />
        </label>
        <label>
          Company Address - Street:
          <input type="text" name="companyAddress.street" value={formData.companyAddress.street} onChange={onChange} required />
        </label>
        <label>
          Company Address - City:
          <input type="text" name="companyAddress.city" value={formData.companyAddress.city} onChange={onChange} required />
        </label>
        <label>
          Company Address - State:
          <input type="text" name="companyAddress.state" value={formData.companyAddress.state} onChange={onChange} required />
        </label>
        <label>
          Company Address - Zip Code:
          <input type="text" name="companyAddress.zipCode" value={formData.companyAddress.zipCode} onChange={onChange} required />
        </label>
        <label>
          Plants Needed:
          <input type="text" name="plantsNeeded" value={formData.plantsNeeded} onChange={onChange} required />
        </label>
      </>
    )}

    <button type="submit">Sign Up</button>
    {error && <p className="error-message">{error}</p>}
    {success && <p className="success-message">{success}</p>}
  </form>
);

export default SignupLogin;
