import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPMENT, CART_SAVE_PAYMENT } from '../constants/cartConstants';

export const addToCard = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${id}`)

    dispatch({
        type : CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id)=> (dispatch,getState) =>{
    dispatch({
        type : CART_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const saveShimpmentInfo = (data)=> (dispatch) =>{
    dispatch({
        type : CART_SAVE_SHIPMENT,
        payload:data,
 
    })
    localStorage.setItem('shippingInfo',JSON.stringify(data))
}


export const savePaymentInfo = (data)=> (dispatch) =>{
    dispatch({
        type : CART_SAVE_PAYMENT,
        payload:data,
 
    })
    localStorage.setItem('paymentInfo',JSON.stringify(data))
}
