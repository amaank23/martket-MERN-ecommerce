import React, { useEffect } from 'react';
import ProductTable from './ProductTable';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getProduct, addProduct, deleteProduct } from '../../../redux/actions/products';
import { getCategories } from '../../../redux/actions/category';
import { connect } from 'react-redux';

const ProductPanel = ({ getProduct, addProduct, deleteProduct, products, getCategories, categories }) => {
    useEffect(() => {
        getProduct();
        getCategories();
    }, [getProduct, getCategories]);
    return (
        <section className="products">
            <Paper>
                <Grid container>
                    <Grid xs={12} item>
                        {categories.loaded ? (
                            <ProductTable
                                addProduct={addProduct}
                                deleteProduct={deleteProduct}
                                products={products}
                                categories={categories.categories}
                            />
                        ) : ''}
                        
                    </Grid>
                </Grid>
            </Paper>
        </section>
    )
}

const mapStateToProps = state => ({
    products: state.product.products,
    categories: state.categories
})

export default connect(mapStateToProps, { addProduct, getProduct, deleteProduct, getCategories })(ProductPanel);
