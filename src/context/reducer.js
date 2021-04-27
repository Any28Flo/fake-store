import {
    SET_PRODUCTS,
    SET_USER,
    ADD_FAV,
    RESET_FAVS,
    SET_FAVS
} from "./../types"

export const initialState ={
    products:null,
    user: null,
    jwt: window.sessionStorage.getItem('jwt'),
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
                jwt: action.jwt,
                favs: action.favs
            }
        case ADD_FAV:
            return {
                ...state,
                fav: action.id
            }
        case RESET_FAVS:
            return {
                ...state,
                favs: null
            }
        case SET_FAVS:
            return {
                ...state,
                favs: action.favs
            }
        default:
            return state
    }
};

export default reducer;
