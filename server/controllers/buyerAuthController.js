const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Buyer = require('../models/buyerModel'); // Assuming buyerModel.jsxx is in the models folder

// JWT Secret key
const JWT_SECRET = 'secret123'; // Replace this with a strong secret key

// Register a new buyer
exports.registerBuyer = async (req, res) => {
    const { name, password, email, phoneNumber, location, plantNeeded, aadharNumber } = req.body;

    try {
        // Check if buyer already exists
        const existingBuyer = await Buyer.findOne({ email });
        if (existingBuyer) {
            return res.status(400).json({ message: 'Buyer with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new buyer
        const newBuyer = new Buyer({
            name,
            password: hashedPassword,
            email,
            phoneNumber,
            location,
            plantNeeded,
            aadharNumber
        });

        await newBuyer.save();
        res.status(201).json({ message: 'Buyer registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Login buyer
exports.loginBuyer = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if buyer exists
        const buyer = await Buyer.findOne({ email });
        if (!buyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, buyer.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: buyer._id, email: buyer.email }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get buyer profile
exports.getBuyerProfile = async (req, res) => {
    try {
        const buyer = await Buyer.findById(req.user.id).select('-password');
        if (!buyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        res.status(200).json(buyer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message || error });
    }
};
