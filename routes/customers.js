const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const customerAuth = require('../middleware/customerAuth');

const router = express.Router();

// GET CUSTOMER MODEL
const Customer = require('../models/Customer');


// @ROUTE GET api/customer/me
// @DESC Get Current Logged In Customer Details
// @ACCESS PRIVATE
router.get('/api/customer/me', customerAuth, async (req, res) => {
    try {
        const customer = await Customer.findById(req.customer).select('-password');

        if(!customer){
            return res.json({ msg: "Customer Not Found" });
        }

        res.json(customer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    };
});

// @ROUTE POST api/customer
// @DESC Register Customer
// @ACCESS Public
router.post('/api/customer', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let customer = await Customer.findOne({ email });

        if(customer){
            return res.status(400).json({ errors: [{ msg: 'User Already Exist' }] });
        }

        customer = new Customer({
            name,
            email,
            password
        });

        customer.password = await bcrypt.hash(password, 8);

        await customer.save();

        jwt.sign({ customer_id: customer._id, role: 'customer' }, config.get('jwtToken'), { expiresIn: 360000 }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        })

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


module.exports = router;