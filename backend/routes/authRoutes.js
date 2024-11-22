const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware');
const upload = require('../config/multerConfig');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user', authenticate, authController.getUser);
router.put('/update', authenticate, upload.single('avatar'), authController.updateUser);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.verifyOtpAndResetPassword);
router.put('/change-password', authenticate, authController.changePassword);

module.exports = router;