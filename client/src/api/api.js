// src/api/api.js
const API_URL = 'http://localhost:5000/api';


export const registerFarmer = async (formData) => {
    try {
      const response = await fetch('/api/farmers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const text = await response.text(); // Read the response as text
      console.log('Raw response:', text);
  
      const data = JSON.parse(text); // Manually parse JSON
      return data;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  
  

export const loginFarmer = async (data) => {
    const response = await fetch(`${API_URL}/farmers/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const registerBuyer = async (data) => {
    const response = await fetch(`${API_URL}/buyers/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const loginBuyer = async (data) => {
    const response = await fetch(`${API_URL}/buyers/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const registerContractor = async (data) => {
    const response = await fetch(`${API_URL}/contractors/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const loginContractor = async (data) => {
    const response = await fetch(`${API_URL}/contractors/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
};
