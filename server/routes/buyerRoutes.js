const express = require('express');
const router = express.Router();
const buyerAuthController = require('../controllers/buyerAuthController'); // Assuming buyerAuthController.js is in controllers folder
const authMiddleware = require('../middlewares/authMiddleware'); // Authentication middleware to protect routes

// Register a new buyer
router.post('/register', buyerAuthController.registerBuyer);

// Login buyer
router.post('/login', buyerAuthController.loginBuyer);

// Get buyer profile (protected route)
router.get('/profile', authMiddleware, buyerAuthController.getBuyerProfile);

module.exports = router;
