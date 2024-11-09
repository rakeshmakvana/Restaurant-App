const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register Route
router.post('/register', authController.register);

// Login Route
router.post('/login', authController.login);

//Get
router.get('/users', authController.getUsers);

// Forgot Password - Send OTP to Email
router.post('/forgot-password', authController.forgotPassword);

// Verify OTP and Reset Password
router.post('/reset-password', authController.verifyOtpAndResetPassword);

module.exports = router;
