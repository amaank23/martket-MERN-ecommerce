import React, { useState, useEffect } from 'react';
import { Paper, Grid, TextField, Box, makeStyles, Typography, Select, MenuItem, InputLabel, FormControl, Button } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import { connect } from 'react-redux';
import { addProduct } from '../../../redux/actions/products';
import { getCategories } from '../../../redux/actions/category';

const useStyles = makeStyles({
    formControl: {
        minWidth: '100%',
      },
    paper: {
        height: ''
    },
    featuredImage: {
        width: "100%",
        height: '150px',
        textAlign: 'center',
        backgroundColor: '#F7F9FB',
        border: '1px solid #00000040',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& svg': {
            fontSize: '45px'
        },
        '& h6': {
            fontWeight: 'bold'
        },
        borderRadius: '5px',
        cursor: 'pointer',
    },
    selected: {
        backgroundColor: "green",
        color: '#fff',
        fontWeight: 'bold',
        padding: '5px',
        borderRadius: '4px'
    }

})

const AddProduct = ({ addProduct, getCategories, categories }) => {
    const classes = useStyles();
    const [isDiscountChecked, setDiscountChecked] = useState(false);
    const [discountType, setDiscountType] = useState('');
    const [discountValue, setDiscountValue] = useState(null);
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [featuredImage, setFeaturedImage] = useState(null);
    const [galleryImages, setGalleryImages] = useState(null);
    const [stocks, setStocks] = useState(null);
    const [category, setCategory] = useState("");

    useEffect(() => {
        getCategories();
    }, [getCategories])

    function handleSubmit(){
        let featuredImageData;
        let galleryImageData;
        const productData = {
            productName,
            productShortDescription: description,
            price,
            attributes: {
                stock: stocks
            }
        }
        if(category){
            productData.category = category
        }
        if(isDiscountChecked){
            productData.discount = {
                discountType,
                discountValue
            }
        }
        if(featuredImage){
            featuredImageData = new FormData();
            featuredImageData.append('upload', featuredImage);
        }

        if(galleryImages){
            galleryImageData = new FormData();

            for(const file of galleryImages){
                galleryImageData.append('uploadGallery', file);
            } 
        }

        addProduct(productData, featuredImageData ? featuredImageData : null, galleryImageData ? galleryImageData : null);


        setProductName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setFeaturedImage(null);
        setGalleryImages(null);

        alert("Product Added");
    }

    return (
        <section className="add-product-section">
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Paper className={classes.paper}>
                        <Box p={3}>
                            <h2>Add Product</h2>
                            <form>
                                
                                <Box mb={2}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Select Product Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            label="Product Type"
                                            value="simple-product"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value='simple-product'>Simple Product</MenuItem>
                                            <MenuItem value='variable-product'>Vaiable Product</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box mb={2}>     
                                    <TextField
                                        label="Product Title"
                                        variant="outlined"
                                        fullWidth={true}
                                        onChange={(e) => setProductName(e.target.value)}
                                        value={productName}
                                    />
                                </Box>
                                <Box mb={2}>
                                    <TextField
                                        label="Product Description"
                                        variant="outlined"
                                        fullWidth={true}
                                        multiline
                                        rows="5"
                                        rowsMax="5"
                                        onChange={(e) => setDescription(e.target.value)}
                                        value={description}
                                    />
                                </Box>
                                <Box mb={2}>
                                    <TextField
                                        label="Price"
                                        variant="outlined"
                                        fullWidth={true}
                                        onChange={(e) => setPrice(e.target.value)}
                                        value={price}
                                    />
                                </Box>
                                <Box mb={2}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Select Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            label="Product Category"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <MenuItem value="">
                                                <em>Select Category</em>
                                            </MenuItem>
                                            {categories.map(cat => (
                                                <MenuItem key={cat._id} value={cat._id}>{cat.categoryName}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box mb={2}>
                                    <TextField
                                        label="Stock"
                                        variant="outlined"
                                        fullWidth={true}
                                        type="number"
                                        onChange={(e) => setStocks(e.target.value)}
                                        value={stocks}
                                    />
                                </Box>
                                <Box mb={2}>
                                    <input type="checkbox" name="" id="" checked={isDiscountChecked} onChange={(e) => setDiscountChecked(e.target.checked)} />
                                    <label htmlFor="">Discount</label>
                                </Box>
                                {isDiscountChecked && (
                                    <Box mb={2}>
                                        <Grid container xs="12">
                                            <Grid item xs="6">
                                                <Box mr={0.5}>
                                                    <FormControl variant="outlined" className={classes.formControl}>
                                                    <InputLabel id="demo-simple-select-outlined-label">Select Discount Type</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        label="Select Discount Type"
                                                        value={discountType}
                                                        onChange={(e) => setDiscountType(e.target.value)}
                                                    >
                                                        <MenuItem>
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value='percentage'>Percentage</MenuItem>
                                                        <MenuItem value='fixed'>Fixed</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Grid>
                                            <Grid item xs="6">
                                                <Box ml={0.5}>   
                                                    <TextField
                                                        label="Discount Value"
                                                        variant="outlined"
                                                        fullWidth={true}
                                                        type="number"
                                                        value={discountValue}
                                                        onChange={(e) => setDiscountValue(e.target.value)}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )}
                                <Box mb={2}>
                                    <label htmlFor="featured-image">
                                        <div className={classes.featuredImage}>
                                            <Image />
                                            <Typography variant="subtitle1">Add Featured Image</Typography>
                                            {featuredImage ? (<span className={classes.selected}>Image Selected</span>) : ''}
                                        </div>
                                    </label>
                                    <input type="file" id="featured-image" onChange={(e) => setFeaturedImage(e.target.files[0])} hidden />
                                    
                                </Box>
                                <Box mb={2}>
                                    <label htmlFor="gallery-image">
                                        <div className={classes.featuredImage}>
                                            <Image />
                                            <Typography variant="subtitle1">Add Gallery Images</Typography>
                                            {galleryImages ? (<span className={classes.selected}>Image Selected</span>) : ''}
                                        </div>
                                    </label>
                                    <input type="file" id="gallery-image" onChange={(e) => setGalleryImages(e.target.files)} multiple="multiple" hidden />
                                    
                                </Box>
                                <Box>
                                    <Button variant="contained" color="primary" onClick={handleSubmit}>Add Product</Button>
                                </Box>
                            </form>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </section>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories
})

export default connect(mapStateToProps, { addProduct, getCategories })(AddProduct)
