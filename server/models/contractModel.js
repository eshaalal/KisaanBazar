const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Contractor', 'Buyer'], // Name can be either 'Contractor' or 'Buyer'
  },
  cropType: {
    type: String,
    required: true, // Type of crop for the contract
  },
  phoneNumber: {
    type: String,
    required: true, // Contact phone number
  },
  contractDuration: {
    type: Number, // Duration of the contract in months
    required: true,
  },
  landAcres: {
    type: Number, // Size of the land in acres
    required: true,
  },
  supplyDuration: {
    type: Number, // Duration of the supply in days
    required: true,
  },
  amountPerSupply: {
    type: Number, // Amount paid for each supply
    required: true,
  },
  initialAmount: {
    type: Number, // Initial amount paid upfront
    required: true,
  },
  location: {
    type: String, // Location of the land
    required: true,
  },
  finalAmount: {
    type: Number, // Total amount after contract completion
    required: true,
  },
  aadharId: {
    type: String,
    required: true, // Aadhar ID for verification
    unique: true,
  }
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
