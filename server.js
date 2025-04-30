const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

const otpRoutes = require('./controllers/otpController');
const otpService = require('./services/otpService');

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/api/otp', otpRoutes);

// Periodic cleanup
setInterval(otpService.cleanupExpiredOtps, 60 * 5000);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
