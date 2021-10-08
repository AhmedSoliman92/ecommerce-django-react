import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LOGOUT,
}
from '../constants/userConstants'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch (
            {
                type: USER_LOGIN_REQUEST
            }
        )
        const config = {
            headers : {
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            'http://127.0.0.1:8000/api/users/login', 
            {'username': email, 'password': password},
            config
            )
        
        dispatch(
            {
                type : USER_LOGIN_SUCCESS,
                payload : data
            }
        )
        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error){
        dispatch(
            {
                type : USER_LOGIN_FAIL,
                payload : error.response && error.response.data.details
                ? error.response.data.details
                : error.message
            }
        )
    }
}

export const register = (firstName,lastName, email,password,confirmPassword)=> async (dispatch) => {
    try {
        dispatch({
            type : USER_REGISTER_REQUEST
        })
        const config = {
            headers : {
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post('http://127.0.0.1:8000/api/users/register',
        {'firstName':firstName, 'lastName':lastName,'email':email,'password':password, 'confirmPassword': confirmPassword},
        config
        )
        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))


    }catch(error){
        dispatch({
            type : USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message
            ? error.response.data.details
            : error.message
        })
    }

}
export const Logout = () => (dispatch) => {
        localStorage.removeItem('userInfo')
        dispatch({
            type: USER_LOGOUT
        })
}
