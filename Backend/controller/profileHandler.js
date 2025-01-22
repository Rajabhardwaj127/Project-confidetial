// profileHandler.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Order = require('../models/orderSchema');

router.get('/', async (req, res) => {
    try {
        // Get user email from the session (assuming you store it there)
        const userEmail = req.user.email; // Adjust based on how you store user info in session

        // Fetch user data
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            throw new Error('User not found');
        }

        // Fetch user's orders
        const orders = await Order.find({ 'customer.email': userEmail })
                                .sort({ orderDate: -1 });

        res.json({
            success: true,
            user: {
                name: user.name,
                email: user.email
            },
            orders: orders
        });
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching profile data',
            error: error.message
        });
    }
});

module.exports = router;