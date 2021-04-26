import {
    SET_PRODUCTS,
    SET_USER
} from "./../types"

export const initialState ={
    products:null,
    user: null,
    jwt: null
}

const reducer = (state, action)=>{
    switch (action.type){
        case SET_PRODUCTS:
            return{
                ...state,
                products: action.products
            }
        case SET_USER:
            return{
                ...state,
                user: action.user
            }
        default:
            return state
    }
};

export default reducer;
