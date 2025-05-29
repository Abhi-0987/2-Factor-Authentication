# 2-Factor Authentication System

A Node.js-based implementation of Two-Factor Authentication (2FA) using OTPs (One-Time Passwords) sent via email. This project enhances security by adding an extra verification step after login or registration.

## Hosting

You can fork this repo and make your required changes, then host it on render to create your own endpoint.

📺 **Video Tutorial**: [How to deploy Node.js apps on Render](https://www.youtube.com/watch?v=_HiTTBHKVwU)

---

## 🔗 Live Demo

- **Demo Video**: [Watch how it works locally](media/2FA.mp4)  
  > This video demonstrates how to run and test the system on your local machine.

- **Base URL (Local)**: `https://localhost:5000`  
  > This is the default base URL when running the project locally. It will change once hosted (e.g., on Render).

- **Postman Testing Workspace**: [View workspace](https://web.postman.co/workspace/f96edb81-6fe8-4258-9026-37b8da6a2d95)  
  > Once hosted, update the endpoints in this workspace to match your deployment URL.

> ⚠️ This endpoint is for **demonstration purposes only**.  
> Please host your own instance for production or personal use.


---

## Features

- ✅ Email-based OTP verification  
- 🔒 Secure random OTP generation  
- 📬 HTML email templates for better UX  
- ♻️ Modular and clean project structure  
- ⚙️ Easily configurable via `.env`  

## Core Functionality

These internal mechanisms make the 2FA system reliable and secure:

- **Secure OTP Generation**  
  Generates a random 6-digit OTP tied to the user's email.

- **OTP Expiry Handling**  
  Each OTP expires after 3 minutes to ensure time-based validation.

- **Attempt Limiting**  
  A maximum of 3 incorrect attempts are allowed per OTP before invalidation.

- **One-Time Use Enforcement**  
  Once an OTP is successfully verified, it is immediately deleted to prevent reuse or replay attacks.

- **Automatic Cleanup**  
  Expired OTPs are periodically removed from memory to avoid memory leaks.

- **Structured Response Messages**  
  All responses from OTP verification are structured with HTTP-like status and clear messages.


---

## Tech Stack

- Node.js  
- Express.js  
- Nodemailer  
- dotenv  
- body-parser  

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)  
- npm or yarn  
- Email service credentials (e.g., Gmail, SendGrid)  

### Installation

```bash
git clone https://github.com/Abhi-0987/2-Factor-Authentication.git
cd 2-Factor-Authentication
npm install
```

### Environment Setup
Create a `.env` file in the root directory with:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```
>📺 Need help? Watch this [video](https://www.youtube.com/watch?v=lSURGX0JHbA) on how to generate a Google App Password.
> ⚠️ Important: Use App Passwords if your Gmail has 2FA enabled.

### Run the Server

```bash
npm start
```
The server will now run in your localhost:5000

## 📬 API Endpoints

| Method | Endpoint | Description |
|--------|--------------|--------------------------|
| POST | /api/otp/login | Login and send request for OTP |
| POST | /api/otp/verify | Verify OTP from email |

Sample request payloads are available in the Postman Workspace link above.

## 🗂 Project Structure
```text
2-Factor-Authentication/
├── config/           # Email configuration
├── controllers/      # Route handlers
├── services/         # OTP logic and email sending
├── utils/            # Utility functions
├── otp-email.html    # HTML email template
├── server.js         # App entry point
├── .env              # Environment variables
├── package.json      # Project metadata
├── package-lock.json
```

# 🙌 Contributing
Contributions are welcome!
Feel free to fork the repository, make changes, and open a pull request.

If you find a bug or want to suggest an enhancement, feel free to open an issue.
