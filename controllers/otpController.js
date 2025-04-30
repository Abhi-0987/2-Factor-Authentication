const express = require('express');
const router = express.Router();
const otpService = require('../services/otpService');
const emailService = require('../services/emailService');
const rateLimiter = require('../utils/rateLimiter');

// Send OTP Endpoint
router.post('/login', rateLimiter.otpLimiter, async (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Missing email' });

    try {
        const otp = await otpService.generateOtp(email);
        await emailService.sendOtpEmail(email, otp);
        res.json({ message: 'OTP sent successfully' });
    } catch (err) {
        console.error('OTP Send Error:', err);
        res.status(500).json({ message: 'Failed to send OTP' });
    }
});

// Verify OTP Endpoint
router.post('/verify', async (req, res) => {
    const { email, otp } = req.body;
    const result = await otpService.verifyOtp(email, otp);

    if (result.success) {
        return res.json({ message: 'OTP verified. Authentication complete!' });
    } else {
        return res.status(result.status).json({ message: result.message });
    }
});

module.exports = router;
