const { AuthenticatorError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../Secret');

module.exports = (context) => {
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            try {
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            } catch (err) {
                throw new AuthenticatorError('Invalid/Expired token');
            }
        }
        throw new Error(`Authentication token must be 'Beared [token]'`);
    }
    throw new Error(`Authorization header must be provided`);
};