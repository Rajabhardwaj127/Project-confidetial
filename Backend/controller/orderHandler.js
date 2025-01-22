// API Handler (orderHandler.js)
const express = require('express');
const router = express.Router();
const Order = require('../models/orderSchema');

router.post('/api/orders', async (req, res) => {
  try {
    // Modify the frontend code to send the order data here
    const orderData = {
      customer: {
        firstName: req.body.customer.firstName,
        lastName: req.body.customer.lastName,
        address1: req.body.customer.address1,
        address2: req.body.customer.address2,
        country: req.body.customer.country,
        state: req.body.customer.state,
        city: req.body.customer.city,
        zipCode: req.body.customer.zipCode,
        phone: req.body.customer.phone
      },
      items: req.body.items,
      subtotal: req.body.total, // From the current implementation
      total: req.body.total // You might want to add shipping and tax calculation here
    };

    const newOrder = new Order(orderData);
    await newOrder.save();

    res.status(201).json({
      success: true,
      orderNumber: newOrder.orderNumber,
      message: 'Order created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating order',
      error: error.message
    });
  }
});

module.exports = router;