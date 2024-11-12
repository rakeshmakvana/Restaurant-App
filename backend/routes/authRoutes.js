const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware');
const upload = require('../config/multerConfig');

// Register Route with avtar
router.post('/register', upload.single('avatar'), authController.register);

// Login Route
router.post('/login', authController.login);

//Get User
router.get('/users', authController.getUsers);

// Update user profile route
router.put('/users/:id', upload.single('avatar'), authController.updateUser);

// Forgot Password - Send OTP to Email
router.post('/forgot-password', authController.forgotPassword);

// Verify OTP and Reset Password
router.post('/reset-password', authController.verifyOtpAndResetPassword);

// Change Password route
router.put('/change-password', authenticate, authController.changePassword);

module.exports = router;
