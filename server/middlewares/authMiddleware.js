const jwt = require('jsonwebtoken');

// JWT Secret key (you might want to use environment variables in production)
const JWT_SECRET = 'secret123'; // Replace this with your actual secret key

const authMiddleware = (req, res, next) => {
    // Get token from Authorization header
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token

    if (!token) {
        return res.status(401).jsxxon({ message: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach decoded user information to request
        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        res.status(401).jsxxon({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
