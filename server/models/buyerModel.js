const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Buyer model
const buyerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    plantNeeded: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the Buyer model
const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
