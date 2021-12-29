const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');

const router = express.Router();

// GET PRODUCT MODEL
const Product = require('../models/Product');

// GET Image MODEL
const Image = require('../models/Image');
const { findOne } = require('../models/Image');

// Configure Multer for Featured Product Image
const upload = multer({
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please Upload a valid File Format'));
        }
        cb(undefined, true);
    }
});

// Configure Multer for Gallery Images for Product
const uploadGallery = multer({
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please Upload a valid File Format'));
        }
        cb(undefined, true);
    }
});

// @ROUTE GET api/products
// @DESC Get All Products
// @ACCESS Public
router.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);

    } catch (err) {
        
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @ROUTE POST api/product
// @DESC Add a Product
// @ACCESS Private
router.post('/api/product', auth, async (req, res) => {

    try {
        const product = new Product({
            ...req.body
        });
        await product.save();
        res.json(product);
    } catch (err) {
        
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @ROUTE PUT api/product/image
// @DESC Add a Featured Image to a Product
// @ACCESS Private
router.put('/api/product/image', [auth, upload.single('upload')], async (req, res) => {
    try {

        const product = await Product.findOne({ _id: req.headers.product_id });

        if(!product){
            return res.status(400).send({ msg: "Product Not Found" });
        }

        if(product.featuredImage.imageID){
            await Image.findByIdAndRemove({ _id: product.featuredImage.imageID })
        }

        const { buffer, mimetype } = req.file;

        const image = new Image({
            imageBinary: buffer,
            imageFileFormat: mimetype
        });

        await image.save();

        product.featuredImage = {
            imageID: image._id,
            imgUrl: `${req.protocol}://${req.get('host')}/api/product/image/${image._id}`
        };


        await product.save();

        res.json(product);
    } catch (err) {
        console.log("error");
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @ROUTE PUT api/product/gallery
// @DESC Add Gallery Images to a Product
// @ACCESS Private
router.put('/api/product/gallery', [auth, uploadGallery.array('uploadGallery', 4)], async (req, res) => {
    try {

        const product = await Product.findOne({ _id: req.headers.product_id });

        if(!product){
            return res.status(400).send({ msg: "Product Not Found" });
        }

        if((product.imageGallery.length + req.files.length) > 4 ){
            return res.status(400).send({ msg: "You can only upload 4 images" });
        }

        for(const file of req.files){
            let image = new Image(
                {
                    imageBinary: file.buffer,
                    imageFileFormat: file.mimetype
                }
            );
            await image.save();

            product.imageGallery.push({
                imageID: image._id,
                imgUrl: `${req.protocol}://${req.get('host')}/api/product/image/${image._id}`
            });

            await product.save();
        }

        res.json(product);
    } catch (err) {
        
        console.log("error");
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @ROUTE PUT api/product/:id
// @DESC Update Product
// @ACCESS private
router.put('/api/product/:id', auth, async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params.id });

        if(!product){
            return res.status(400).send({ msg: "Product Not Found" });
        }

        product = await Product.findOneAndUpdate({ _id: req.params.id }, {...req.body}, { new: true });

        res.json(product);

    } catch (err) {
        
        console.log("error");
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @ROUTE PUT api/product/:id/:cat_id
// @DESC Add a Category to a Product
// @ACCESS Private
router.put('/api/product/:id/:cat_id', auth, async (req, res) => {

    try {
        const product = await Product.findOne({ _id: req.params.id });

        if(!product){
            return res.status(400).send({ msg: "Product Not Found" });
        }

        product.category = req.params.cat_id;

        await product.save();
        res.json(product);

    } catch (err) {
        
        console.log("error");
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



// @ROUTE GET api/product/:id/image
// @DESC Get Featured Image
// @ACCESS Public
router.get('/api/product/image/:image_id', async (req, res) => {
    try {
        const image = await Image.findOne({ _id: req.params.image_id });

        if(!image){
            return res.status(400).send({ msg: "Image Not Found" });
        }

        res.set('Content-Type', image.imageFileFormat);
        res.send(image.imageBinary);

    } catch (err) {
        
        console.log("error");
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @ROUTE PUT api/product/gallery
// @DESC Add Gallery Images to a Product
// @ACCESS Private
router.put('/api/product/gallery', [auth, uploadGallery.array('uploadGallery', 4)], async (req, res) => {
    try {

        const product = await Product.findOne({ _id: req.headers.product_id });

        if(!product){
            return res.status(400).send({ msg: "Product Not Found" });
        }

        if((product.imageGallery.length + req.files.length) > 4 ){
            return res.status(400).send({ msg: "You can only upload 4 images" });
        }

        for(const file of req.files){
            let image = new Image(
                {
                    imageBinary: file.buffer,
                    imageFileFormat: file.mimetype
                }
            );
            await image.save();

            product.imageGallery.push({
                imageID: image._id,
                imgUrl: `${req.protocol}://${req.get('host')}/api/product/image/${image._id}`
            });

            await product.save();
        }

        res.json(product);
    } catch (err) {
        
        console.log("error");
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @ROUTE DELETE api/product/:id
// @DESC Delete a Product
// @ACCESS Private
router.delete('/api/product/:id', auth, async (req, res) => {
    try {
        // await Product.findByIdAndRemove({ _id: req.params.id });
        // res.json({ msg: 'Product Deleted' });

        const images = [];

        const product = await Product.findOne({ _id: req.params.id });

        if(product.featuredImage.imageID){
            images.push(product.featuredImage.imageID);
        }

        if(product.imageGallery){
            for(const image of product.imageGallery){
                images.push(image.imageID);
            }

            for(const img of images){
                await Image.findByIdAndRemove({ _id: img });
            }
        }

        await Product.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'Product Deleted' });

    } catch (err) {
        
        console.log("error");
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @ROUTE DELETE api/product/:id/image/:image_id
// @DESC Delete a Product Gallery Image
// @ACCESS Private
router.delete('/api/product/:id/image/:image_id', auth, async (req, res) => {
    try {
        const { id, image_id } = req.params;
        const product = await Product.findOne({ _id: id });

        if(!product){
            return res.status(400).send({ msg: "Product Not Found" });
        }

        const imageIndex = product.imageGallery.map(img => img.imageID).indexOf(image_id);

        if(imageIndex === -1){
            return res.json({ msg: "Image Not Found" });
        }

        product.imageGallery.splice(imageIndex, 1);

        product.save();

        await Image.findByIdAndRemove({ _id: image_id });

        res.json({ msg: "Image Deleted" });
    } catch (err) {
        
        console.log("error");
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;