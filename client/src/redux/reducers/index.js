import { combineReducers } from 'redux'
import adminAuthReducer from './adminAuthReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';


const rootReducer = combineReducers({
    adminAuth: adminAuthReducer,
    categories: categoryReducer,
    product: productReducer
})

export default rootReducer;