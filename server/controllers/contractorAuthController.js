const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Contractor = require('../models/contractorModel'); // Assuming contractorModel.jsx is in the models folder

// JWT Secret key (consider using environment variables for production)
const JWT_SECRET = 'secret123';

// Register a new contractor
exports.registerContractor = async (req, res) => {
    const { name, email, password, aadharNumber, phoneNumber, companyName, companyLicence, companyAddress, plantsNeeded } = req.body;

    try {
        // Check if contractor already exists
        const existingContractor = await Contractor.findOne({ email });
        if (existingContractor) {
            return res.status(400).json({ message: 'Contractor with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new contractor
        const newContractor = new Contractor({
            name,
            email,
            password: hashedPassword,
            aadharNumber,
            phoneNumber,
            companyName,
            companyLicence,
            companyAddress,
            plantsNeeded
        });

        await newContractor.save();
        res.status(201).json({ message: 'Contractor registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Login contractor
exports.loginContractor = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if contractor exists
        const contractor = await Contractor.findOne({ email });
        if (!contractor) {
            return res.status(404).json({ message: 'Contractor not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, contractor.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: contractor._id, email: contractor.email }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get contractor profile (protected route)
exports.getContractorProfile = async (req, res) => {
    try {
        const contractor = await Contractor.findById(req.user.id).select('-password');
        if (!contractor) {
            return res.status(404).json({ message: 'Contractor not found' });
        }
        res.status(200).json(contractor);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message || error });
    }
};
