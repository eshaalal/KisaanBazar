const express = require('express');
const router = express.Router();
const farmerAuthController = require('../controllers/farmerAuthController'); // Assuming farmerAuthController.js is in controllers folder
const authMiddleware = require('../middlewares/authMiddleware'); // Authentication middleware to protect routes

// Register a new farmer
router.post('/register', farmerAuthController.registerFarmer);

// Login farmer
router.post('/login', farmerAuthController.loginFarmer);

// Get farmer profile (protected route)
router.get('/profile', authMiddleware, farmerAuthController.getFarmerProfile);

module.exports = router;
