import cartReducer from "./cartReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    cart: cartReducer,

})

const initialState = {
    cart: {
        cartItems : localStorage.getItem('cart_items')? JSON.parse(localStorage.getItem('cart_items')) : [],
        shippingInfo : localStorage.getItem('shipping_info')? JSON.parse(localStorage.getItem('shipping_info')): {}
} 
}

const middleware = [thunk]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store