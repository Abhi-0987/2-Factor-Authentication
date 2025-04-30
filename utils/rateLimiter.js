const rateLimit = require('express-rate-limit');

exports.otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: 'Too many OTP requests. Please try again later.'
});