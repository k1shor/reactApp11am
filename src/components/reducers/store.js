import cartReducer from "./cartReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { newOrderReducer, OrderDetailReducer, userOrderReducer } from "./newOrderReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    newOrder: newOrderReducer,
    userOrder: userOrderReducer,
    orderDetail: OrderDetailReducer
})

const initialState = {
    cart: {
        cartItems : localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : [],
        shipping_info : localStorage.getItem('shipping_info')? JSON.parse(localStorage.getItem('shipping_info')): {}
} 
}

const middleware = [thunk]
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store