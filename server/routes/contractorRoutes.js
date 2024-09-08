const express = require('express');
const router = express.Router();
const contractorAuthController = require('../controllers/contractorAuthController'); // Assuming contractorAuthController.js is in controllers folder
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware to protect routes

// Register a new contractor
router.post('/register', contractorAuthController.registerContractor);

// Login contractor
router.post('/login', contractorAuthController.loginContractor);

// Get contractor profile (protected route)
router.get('/profile', authMiddleware, contractorAuthController.getContractorProfile);

module.exports = router;
