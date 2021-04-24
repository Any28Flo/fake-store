import { SET_PRODUCTS} from "./../types"

export const initialState ={
    products:null,
    user: null
}

const reducer = (state, action)=>{
    switch (action.type){
        case SET_PRODUCTS:
            return{
                ...state,
                products: action.products
            }
        default:
            return state
    }
};

export default reducer;
