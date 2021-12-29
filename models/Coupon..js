const mongoose = require('mongoose');


const CouponSchema = new mongoose.Schema({
    couponCode: {
        type: String,
        required: true
    },
   date: {
       type: Date,
       default: Date.now()
   } 
});