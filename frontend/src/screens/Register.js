import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Form, Button, FormGroup} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'
const Register = ({location,history}) => {
    const [firstName,setFirstName] =useState('')
    const [lastName,setLastName] =useState('')
    const [email,setEmail] =useState('')
    const [passoword,setPassword] =useState('')
    const [confirmPassoword,setConfirmPassword] =useState('')
    const [message,setMessage] =useState('')

    const redirect = location.search ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo} = userRegister
    
    useEffect(()=> {
        if(userInfo){
            history.push(redirect)
        }
    },[history,redirect,userInfo])
    const handleSubmit = (e)=> {
        e.preventDefault()
        if (passoword !== confirmPassoword){
            setMessage('Passwords don\'t match')
        }else{
            dispatch(register(firstName,lastName,email,passoword,confirmPassoword))
        }
        
    }
    return (
        <FormContainer>
            <h1>Registeration</h1>
            {message && <Message variant="danger">{message}</Message>}
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader/>}
            <Form onSubmit={handleSubmit}>
                <FormGroup controlId='firstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                    required
                    autoComplete = "off"
                    placeholder = "your first name"
                    type= "text"
                    value = {firstName}
                    onChange= {(e)=>setFirstName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="lasName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        required
                        autoComplete = "off"
                        placeholder=" your last name"
                        type = "text"
                        value = {lastName}
                        onChange = {(e) => setLastName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId ="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        required
                        placeholder = "your email"
                        type = "email"
                        value = {email}
                        onChange = {(e) => {setEmail(e.target.value)}}
                    />
                </FormGroup>
                <FormGroup controlId = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        autoComplete = "off"
                        placeholder =  "your password"
                        type = "password"
                        value ={passoword}
                        onChange = {(e) => {setPassword(e.target.value)}}
                    />
                </FormGroup>
                <FormGroup controlId = "confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        autoComplete = "off"
                        placeholder =  "confirm your password"
                        type = "password"
                        value ={confirmPassoword}
                        onChange = {(e) => {setConfirmPassword(e.target.value)}}
                    />
                </FormGroup>
                <Button type="submit" className="my-4" variant="primary" >Register</Button>
            </Form>
            <Row className="py-3">
                <Col>
                    You have account? <Link to={redirect? `/login? redirect=${redirect}`:'/login'} >Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Register
