import React, {useState,useEffect} from 'react'
import { Button, Col, Form, FormGroup, Row } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {userDetails,updateUserProfile} from '../actions/userActions'
const Profile = ({history}) => {
    const [firstName,setFirstName] =useState('')
    const [lastName,setLastName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [confirmPassword,setConfirmPassword] =useState('')
    const [message,setMessage] =useState('')
    const [alert,setAlert] =useState('')

    const dispatch = useDispatch()
    const userDetail = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetail

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    useEffect(()=> {

        if(!userInfo){
            history.push('/login')
        }else{
            if(!user || !user.fullName){
                
                dispatch(userDetails('profile'))
            }else{
                
                setFirstName(user.fullName.split(' ')[0])
                setLastName(user.fullName.split(' ')[1])
                setEmail(user.email)

            }
        }
    },[history,dispatch,user,userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setAlert('danger')
            setMessage('Passwords don\'t match')
        }else {
            const updatedUser = {
                'firstName': firstName,
                'lastName' : lastName,
                'email' : email,
                'password' : password
            }
            try{
                dispatch(updateUserProfile({
                    'firstName': firstName,
                    'lastName' : lastName,
                    'email' : email,
                    'password' : password
                }))
            }catch(error){
                console.log(error)
            }
            setAlert('info')
            setMessage('Your account information has been updated successfully!!')
        }
    }
    return (
        <Row>
            <Col md={3}>
                <h1>My Information</h1>
                {message && <Message variant={alert}>{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader/>}
                <Form onSubmit={submitHandler}>
                    <FormGroup controlId ="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={firstName}
                            onChange={(e) => {setFirstName(e.target.value)}}
                        />
                    </FormGroup>
                    <FormGroup controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={lastName}
                            onChange={(e) => {setLastName(e.target.value)}}
                        />
                    </FormGroup>
                    <FormGroup controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="text"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </FormGroup>
                    <FormGroup  controlId="ConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="text"
                            value={confirmPassword}
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                        />
                    </FormGroup>
                    <Button 
                    type="submit">Update</Button>
                </Form>
            </Col>
            <Col md={9}>
                <h1>My Orders</h1>
            </Col>
        </Row>
    )
}

export default Profile
