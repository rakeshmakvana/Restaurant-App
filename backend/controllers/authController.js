const User = require('../models/User');
const Otp = require('../models/Otp');
const bcrypt = require('bcryptjs');
const sendOtpEmail = require('../config/email');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, phone, country, state, city, restaurant, password, role } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        let newUser = await new User({ firstname: firstName, lastname: lastName, email, phone, country, state, city, restaurant, password: await bcrypt.hash(password, 10), role });

        await newUser.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ msg: 'User not found' });

        const otp = generateOtp();
        console.log(otp);

        const otpDoc = new Otp({
            email,
            otp,
            expiresAt: new Date(Date.now() + 10 * 60000),
        });

        await otpDoc.save();
        await sendOtpEmail(email, otp);

        res.status(200).json({ msg: 'OTP sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.verifyOtpAndResetPassword = async (req, res) => {
    const { otp, newPassword, confirmPassword, passOtp } = req.body;
    try {
        const otpRecord = await Otp.findOne({ otp });
        if (otpRecord) return res.status(200).json({ msg: 'Verify OTP' });

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ msg: 'Passwords do not match' });
        }

        const verifyOtp = await Otp.findOne({ otp: passOtp });
        const user = await User.findOne({ email: verifyOtp.email });

        if (!user) return res.status(404).json({ msg: 'User not found' });

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        await Otp.deleteOne({ otp: passOtp });
        res.status(200).json({ msg: 'Password reset successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error' });
    }
};