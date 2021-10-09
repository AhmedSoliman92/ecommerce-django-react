import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import { userLoginReducer,userRegisterReducer , userDetailsReducer} from './reducers/userReducer'
const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer,
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDetails: userDetailsReducer,
})


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null

const shippingInfoFromStorage = localStorage.getItem('shippingInfo') ? 
JSON.parse(localStorage.getItem('shippingInfo')) : {}

const paymentInfoFromStorage = localStorage.getItem('paymentInfo') ? 
JSON.parse(localStorage.getItem('paymentInfo')) : {}

const initialState = {
    cart : {
        cartItems : cartItemsFromStorage,
        shippingInfo : shippingInfoFromStorage,
        paymentInfo : paymentInfoFromStorage,
    },
    userLogin : {userInfo : userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer,initialState
    , composeWithDevTools(applyMiddleware(...middleware)))

export default store