const express = require('express');
const auth = require('../middleware/auth');
const customerAuth = require('../middleware/customerAuth');

// DEFINE ROUTER
const router = express.Router();

// GET ORDER MODEL
const Order = require('../models/Order');


// @ROUTE GET api/product/:id
// @DESC Get All the Orders
// @ACCESS private
router.get("/api/orders" , auth, async (req, res) => {
    try {
        const orders = await Order.find();

        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @ROUTE POST api/order
// @DESC Order a Product
// @ACCESS private
router.post("/api/order", customerAuth, async (req, res) => {
    const { productId, customerId, paymentMethod } = req.body;
    try {
        const order = new Order({
            productId,
            customerId,
            paymentMethod
        });

        await order.save();

        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @ROUTE GET api/order
// @DESC Get All the Orders of the Authenticated Customer
// @ACCESS private
router.get("/api/order", customerAuth, async (req, res) => {
    try {
        const orders = await Order.findOne({ customer_id: req.customer });

        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;