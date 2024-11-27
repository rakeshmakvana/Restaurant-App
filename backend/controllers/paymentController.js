require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Cart = require('../models/cart');
const User = require('../models/user');

// Existing function for payment intent
const createPaymentIntent = async (req, res) => {
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let customerId = user.stripeCustomerId;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name,
        metadata: { userId: userId.toString() },
      });

      user.stripeCustomerId = customer.id;
      await user.save();
      customerId = customer.id;
    }

    const cart = await Cart.findOne({ userId }).populate('items.itemId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const total = cart.items.reduce((sum, item) => {
      const itemPrice = item.itemId.price || 0;
      return sum + itemPrice * item.count;
    }, 0);

    const CGST = (total * 2.5) / 100;
    const SGST = (total * 2.5) / 100;
    const payableAmount = total + CGST + SGST;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(payableAmount * 100),
      currency: 'usd',
      customer: customerId,
      description: 'Payment for cart items',
      metadata: { userId: userId.toString() },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      payableAmount: payableAmount.toFixed(2),
    });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error.message);
    res.status(500).json({ error: 'An error occurred while creating PaymentIntent' });
  }
};

// New function for adding a new card
const addNewCard = async (req, res) => {
    const userId = req.user._id;
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      let customerId = user.stripeCustomerId;

      if (!customerId) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: user.name,
          metadata: { userId: userId.toString() },
        });

        user.stripeCustomerId = customer.id;
        await user.save();
        customerId = customer.id;
      }

      const { card_Name, card_ExpYear, card_ExpMonth, card_Number, card_CVC } = req.body;

      const cardToken = await stripe.tokens.create({
        card: {
          name: card_Name,
          number: card_Number,
          exp_year: card_ExpYear,
          exp_month: card_ExpMonth,
          cvc: card_CVC,
        },
      });

      const paymentMethod = await stripe.paymentMethods.create({
        type: 'card',
        card: { token: cardToken.id },
        billing_details: {
          name: card_Name,
          email: user.email,
        },
      });

      await stripe.paymentMethods.attach(paymentMethod.id, {
        customer: customerId,
      });

      res.status(200).json({
        success: true,
        paymentMethodId: paymentMethod.id,
        message: 'Card added successfully!',
      });
    } catch (error) {
      console.error('Error adding new card:', error.message);
      res.status(500).json({ success: false, message: error.message });
    }
  };

module.exports = { createPaymentIntent, addNewCard };
