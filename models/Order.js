const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customers'
    },
    paymentMethod: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        default: 'In Progress'
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Order = mongoose.model('orders', OrderSchema);