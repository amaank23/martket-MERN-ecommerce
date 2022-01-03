import { combineReducers } from 'redux'
import adminAuthReducer from './adminAuthReducer';
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import clientAuthReducer from './clientAuthReducer';
import productReducer from './productReducer';


const rootReducer = combineReducers({
    adminAuth: adminAuthReducer,
    categories: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    clientAuth: clientAuthReducer
})

export default rootReducer;