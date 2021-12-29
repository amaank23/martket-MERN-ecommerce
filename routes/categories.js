const express = require('express');

const router = express.Router();

// GET Category Model
const Category = require('../models/Category');

// AUTH MIDDLEWARE
const auth = require('../middleware/auth');


// @ROUTE GET api/category
// @DESC Get All Categories
// @ACCESS Public
router.get('/api/category', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @ROUTE POST api/category
// @DESC Add Category
// @ACCESS Private
router.post('/api/category', auth, async (req, res) => {
    try {
        const { categoryName } = req.body;
        const slug = categoryName.toLowerCase().split(' ').join('-');
        let category = await Category.findOne({ categoryName: categoryName });

        if(category){
            return res.status(400).json({ msg: 'Category Already Exist' });
        }
        category = new Category({
            categoryName,
            slug
        });
        await category.save();

        res.json(category);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @ROUTE PUT api/category/:cat_id
// @DESC Update Category
// @ACCESS Private
router.put('/api/category/:cat_id', auth, async (req, res) => {
    try {
        const { categoryName } = req.body;
        const slug = categoryName.toLowerCase().split(' ').join('-');
        let category = await Category.findByIdAndUpdate(req.params.cat_id, { $set: { categoryName, slug } });

        await category.save();

        res.json('Category Updated Successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



// @ROUTE DELETE api/category/:cat_id
// @DESC Delete Category
// @ACCESS Private
router.delete('/api/category/:cat_id', auth, async (req, res) => {
    try {
        await Category.findByIdAndRemove({ _id: req.params.cat_id });

        res.json({ msg: 'Category Deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;