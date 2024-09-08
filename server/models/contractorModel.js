const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name of the contractor
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email of the contractor, must be unique
  },
  password: {
    type: String,
    required: true, // Hashed password for authentication
  },
  aadharNumber: {
    type: String,
    required: true,
    unique: true, // Unique Aadhar number for the contractor
  },
  phoneNumber: {
    type: String, // Contact phone number of the contractor
    required: true,
    unique: true, // Phone number must be unique
  },
  companyName: {
    type: String,
    required: true, // Name of the contractor's company
  },
  companyLicence: {
    type: String,
    required: true,
    unique: true, // Unique company license number
  },
  companyAddress: {
    street: {
      type: String,
      required: true, // Street part of the address
    },
    city: {
      type: String,
      required: true, // City part of the address
    },
    state: {
      type: String,
      required: true, // State part of the address
    },
    zipCode: {
      type: String,
      required: true, // Zip code part of the address
    }
  },
  plantsNeeded: {
    type: [String], // Array of strings to hold the types of plants the contractor needs
    required: true,
  }
});

module.exports = mongoose.model('Contractor', contractorSchema);
