const transporter = require('../config/emailConfig');
const fs = require('fs');
const path = require('path');

exports.sendOtpEmail = async (email, otp) => {
    const templatePath = path.join(__dirname, '../otp-email.html');
    let htmlTemplate = fs.readFileSync(templatePath, 'utf8');
    htmlTemplate = htmlTemplate.replace('{{OTP_CODE}}', otp);

    await transporter.sendMail({
        from: `<${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP is ${otp}. It expires in 5 minutes.`,
        html: htmlTemplate
    });
};
