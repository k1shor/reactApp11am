import axios from 'axios'
import { API } from '../../../config'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartContants'


export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`${API}/product/details/${id}`)
    dispatch({
        type:ADD_TO_CART,
        payload: {
            product:data._id,
            name: data.product_name,
            price: data.product_price,
            image: data.product_image,
            stock: data.count_in_stock,
            quantity 
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {
    const {data} = await axios.get(`${API}/product/details/${id}`)
    console.log(data)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            product: data._id
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}