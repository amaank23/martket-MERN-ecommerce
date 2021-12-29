const express = require('express');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');

const router = express.Router();

// GET User MODEL
const User = require('../models/User');


// @ROUTE GET api/user/me
// @DESC Get Current User Details
// @ACCESS PRIVATE
router.get('/api/user/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user).select('-password');

        if(!user){
            res.status(401).send({ msg: "User not Found" });
        }

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    };
});


// @ROUTE POST api/user
// @DESC Register User from admin panel
// @ACCESS PRIVATE
router.post('/api/user', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(user){
            return res.status(400).json({ errors: [{ msg: 'User Already Exist' }] });
        }

        user = new User({
            name,
            email,
            password
        });

        user.password = await bcrypt.hash(password, 8);

        await user.save();
        return res.json(user);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


module.exports = router;