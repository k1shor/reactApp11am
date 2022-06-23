import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants/cartContants";

// const initialData = {
//     cartItems: [],
//     shipping_info: {}
// }

// const cartReducer = (state=initialData, action) => {
const cartReducer = (state={cartItems: [], shipping_info:{}}, action) => {
    switch(action.type){
        case ADD_TO_CART: 
            const item = action.payload
            const itemExists = state.cartItems.find(i=> i === item)
            if(itemExists){
                return state
            }
            else {
                return ({...state, cartItems:[...state.cartItems, item]})
            }
        
        case REMOVE_FROM_CART: 
            return {
                ...state, 
                cartItems: state.cartItems.filter(item=>item!==action.payload)
            }

    }
}

export default cartReducer