const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    imageBinary: {
        type: Buffer,
        required: true
    },
    imageFileFormat: {
        type: String,
        required: true
    }
});

module.exports = Image = mongoose.model('image', ImageSchema);