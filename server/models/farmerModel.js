const mongoose = require('mongoose');

// Define the Farmer schema
const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true
    },
    plantType: {
        type: String,
        required: true
    },
    isPlanted: {
        type: Boolean,
        required: true,
        default: false
    },
    location: {
        type: String,
        required: true
    },
    landSize: {
        type: Number,  // Size in acres or sq meters
        required: true
    },
    landImage: {
        type: String,  // Image URL or base64 encoded image
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Farmer model
const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
