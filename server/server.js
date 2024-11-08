const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const farmerRoutes = require('./routes/farmerRoutes'); // Assuming routes are inside a folder called routes
const contractorRoutes = require('./routes/contractorRoutes'); // Add contractor routes

const app = express();
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors());

// Farmer routes
app.use('/api/farmers', farmerRoutes);
app.use('/api/contractors', contractorRoutes); // Use contractor routes

// MongoDB connection and server start
mongoose.connect('mongodb+srv://eshalal9693:kR0cKod2KEiWmpuD@kisaanbazaar.zxyac.mongodb.net/kisaanDB?retryWrites=true&w=majority&appName=kisaanBazaar', {
    
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
})
.catch(err => console.error('Failed to connect to MongoDB:', err));
