import axios from 'axios';
import { CATEGORY_ADDED, CATEGORY_DELETED, GET_CATEGORIES } from './types';


// GEL ALL CATEGORIES
export const getCategories = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/api/category');

            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            })
        } catch (err) {
            console.error(err.message);
        }
    }
}


// Add a Category
export const addCategory = (categoryName) => {
    return async dispatch => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({ categoryName });
        try {
            const res = await axios.post('/api/category', body, config);

            dispatch({
                type: CATEGORY_ADDED,
                payload: res.data
            })
        } catch (err) {
            console.error(err.message);
        }
    }
}


// Delete a Category
export const deleteCategory = (id) => {
    return async dispatch => {
        try {
            await axios.delete(`/api/category/${id}`);

            dispatch({
                type: CATEGORY_DELETED,
                payload: id
            })
        } catch (err) {
            console.error(err.message);
        }
    }
}