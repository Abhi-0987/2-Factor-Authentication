const otpStore = {};

exports.generateOtp = (email) => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = {
        otp,
        expiresAt: Date.now() + 60 * 3000,
        attempts: 0
    };
    return otp;
};

exports.verifyOtp = (email, inputOtp) => {
    const record = otpStore[email];
    if (!record) return { success: false, status: 400, message: 'No OTP requested' };

    if (Date.now() > record.expiresAt) {
        delete otpStore[email];
        return { success: false, status: 400, message: 'OTP expired' };
    }

    if (record.attempts >= 3) {
        delete otpStore[email];
        return { success: false, status: 429, message: 'Too many attempts. OTP expired.' };
    }

    if (record.otp !== inputOtp) {
        record.attempts += 1;
        return { success: false, status: 401, message: 'Invalid OTP' };
    }

    delete otpStore[email];
    return { success: true };
};

exports.cleanupExpiredOtps = () => {
    const now = Date.now();
    for (const email in otpStore) {
        if (otpStore[email].expiresAt < now) {
            delete otpStore[email];
        }
    }
    // console.log(' Cleaned expired OTPs'); //We can use this line in development. But in production it is better to eleminate this
};
