import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

export const addToCard = (id, qty) => async (dispatch, getstate) => {
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

    localStorage.setItem('cartItems',JSON.stringify(getstate().cart.cartItems))
}