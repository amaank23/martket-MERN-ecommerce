const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productShortDescription: {
        type: String
    },
    productLongDescription: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        discountType: String,
        discountValue: Number
    },
    attributes: {
        colors: [String],
        sizes: [String],
        weight: {
            type: String
        },
        stock: {
            type: Number
        }
    },
    dimensions: {
        width: {
            type: String
        },
        height: {
            type: String
        }
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    featuredImage: {
        imageID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'images'
        },
        imgUrl: String,
    },
    imageGallery: [
        {
            imageID: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'images'
            },
            imgUrl: String,
        }
    ],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Product = mongoose.model('product', ProductSchema);