const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Farmer = require('../models/farmerModel'); // Assuming FarmerModal.js is in models folder

// JWT Secret key
const JWT_SECRET = 'secret123'; // Replace this with a strong secret key

// Farmer registration
exports.registerFarmer = async (req, res) => {
    const { name, email, password, phoneNumber, address, aadharNumber, plantType, location, landSize } = req.body;

    try {
        // Check if farmer already exists
        const existingFarmer = await Farmer.findOne({ email });
        if (existingFarmer) {
            return res.status(400).json({ message: 'Farmer with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new farmer
        const newFarmer = new Farmer({
            name,
            email,
            password: hashedPassword,
            phoneNumber,
            address,
            aadharNumber,
            plantType,
            location,
            landSize
        });

        await newFarmer.save();
        res.status(201).json({ message: 'Farmer registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Farmer login
exports.loginFarmer = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if farmer exists
        const farmer = await Farmer.findOne({ email });
        if (!farmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, farmer.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: farmer._id, email: farmer.email }, JWT_SECRET, { expiresIn: '1h' });
        
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get farmer profile
exports.getFarmerProfile = async (req, res) => {
  try {
      const farmer = await Farmer.findById(req.user.id).select('-password');
      if (!farmer) {
          return res.status(404).json({ message: 'Farmer not found' });
      }
      res.status(200).json(farmer);
  } catch (error) {
      console.error(error); // Add this to log the error details to the console
      res.status(500).json({ message: 'Server error', error: error.message || error });
  }
};
