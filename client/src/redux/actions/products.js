import axios from 'axios';
import { ADD_PRORUCT, DELETE_PRODUCT, GET_PRODUCTS } from './types';

// GET ALL PRODUCTS
export const getProduct = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/products');

            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        } catch (err) {
            console.error(err.message);
        }
    }
}

// ADD A PRODUCT
export const addProduct = (productData, featuredImage, galleryImages) => {
    return async dispatch => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({...productData});

        try {
            let res = await axios.post('/api/product', body, config);

            if(featuredImage){
                res = await axios.put('/api/product/image', featuredImage, { headers: { product_id: res.data._id, 'Content-Type': 'multipart/form-data' } });
            }

            if(galleryImages){
                res = await axios.put('/api/product/gallery', galleryImages, { headers: { 'product_id': res.data._id } });
            }

            dispatch({
                type: ADD_PRORUCT,
                payload: res.data
            });
        } catch (err) {
            console.error(err.message);
        }
    }
}


// DELETE A PRODUCT
export const deleteProduct = (id) => {
    return async dispatch => {
        try {
            await axios.delete(`/api/product/${id}`);

            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        } catch (err) {
            console.error(err.message);
        }
    }
}


