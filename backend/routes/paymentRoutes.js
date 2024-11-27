const express = require('express');
const router = express.Router();
const { createPaymentIntent, addNewCard } = require('../controllers/paymentController');
const { authenticate } = require('../middleware/authMiddleware');

router.post('/pay', authenticate, createPaymentIntent);
router.post('/add-card', authenticate, addNewCard);

module.exports = router;