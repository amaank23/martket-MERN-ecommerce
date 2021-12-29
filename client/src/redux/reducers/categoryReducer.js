import { CATEGORY_ADDED, CATEGORY_DELETED, GET_CATEGORIES } from "../actions/types";

const initialState = {
    categories: [],
    loaded: false
}

export default function categoryReducer(state = initialState, action){
    const { type, payload } = action;
    switch (type) {
        case GET_CATEGORIES:
            return {
                categories: payload,
                loaded: true
            }
        case CATEGORY_ADDED:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    payload
                ]
            }
        case CATEGORY_DELETED:
            let newState = state.categories.filter(cat => cat._id !== payload);
            return {
                ...state,
                categories: [...newState]
            }
        default:
            return state;
    }
}