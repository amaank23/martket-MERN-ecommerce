const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const router = express.Router();

// GET CUSTOMER MODEL
const Customer = require('../models/Customer');

// GET User MODEL
const User = require('../models/User');

// @ROUTE POST api/customer/login
// @DESC Login Customer
// @ACCESS Public
router.post('/api/customer/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const customer = await Customer.findOne({ email });

        if(!customer){
            return res.status(400).json({ errors: [{ msg: 'User not Found' }] });
        }

        const isMatch = await bcrypt.compare(password, customer.password);
        if(!isMatch){
            return res.status(400).json({ errors: [{ msg: 'User not Found' }] });
        }

        jwt.sign({ customer_id: customer._id, role: 'customer' }, config.get('jwtToken'), { expiresIn: 360000 }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


// @ROUTE POST api/user/login
// @DESC Login User
// @ACCESS Public
router.post('/api/user/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({ errors: [{ msg: 'User not Found' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ errors: [{ msg: 'User not Found' }] });
        }

        jwt.sign({ user_id: user._id, role: 'admin' }, config.get('jwtToken'), { expiresIn: 360000 }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;