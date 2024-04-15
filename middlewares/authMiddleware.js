// Import required modules
const jwt = require('jsonwebtoken');

// Authentication middleware
exports.authenticateUser = (req, res, next) => {
  try {
    // Check if authorization header exists
    if (!req.headers.authorization) {
      throw new Error('Authorization header is missing');
    }

    // Split authorization header to get token
    const token = req.headers.authorization.split(' ')[1];
    
    // Verify token
    const decodedToken = jwt.verify(token, 'secret_key');
    
    // Attach decoded user ID to request object
    req.user = { userId: decodedToken.userId };
    
    // Move to the next middleware
    next();
  } catch (error) {
    // Token verification failed or header missing
    return res.status(401).json({ error: error.message });
  }
};
