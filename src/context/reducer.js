import {
    SET_PRODUCTS,
    SET_USER
} from "./../types"

export const initialState ={
    products:null,
    user: null,
    token : ()=>window.sessionStorage.getItem('jwt'),
    favs: null
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
                user: action.user,
                token : action.token
            }
        default:
            return state
    }
};

export default reducer;
