import React from 'react'
import FormContainer from '../components/FormContainer'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { login } from '../actions/userActions'
const Login = ({location, history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1]:'/'
    
    const userLogin = useSelector(state => state.userLogin)

    const {error, loading, userInfo} = userLogin
    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history, userInfo, redirect])
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email,password))
    }
    return (
        <FormContainer>
            <h1>Log In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit = {submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        placeholder='your email'
                        type = 'email'
                        value = {email}
                        onChange = {(e)=> setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mt-4" controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        placeholder='your password'
                        type = 'password'
                        value = {password}
                        onChange = {(e)=> setPassword(e.target.value)}
                    />
                </Form.Group>


                <Button className="mt-4" type='submit' variant='primary'>Log in </Button>
            </Form>

            <Row className="py-3">
                <Col>
                    you haven't regestered yet? <Link
                    to={redirect ? `/register?redirect=${redirect}`: '/register'}
                    >Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Login
