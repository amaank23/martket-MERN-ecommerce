const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Customer = mongoose.model('customer', CustomerSchema);