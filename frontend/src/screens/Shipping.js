import React,{useState} from 'react'
import FormContainer from '../components/FormContainer'
import { Form, FormGroup,Button, Row, Col } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import {saveShimpmentInfo} from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const Shipping = ({history}) => {

    const cart = useSelector(state => state.cart)
    const {shippingInfo} = cart

    const [address,setAddress] = useState(shippingInfo.address)
    const [city,setCity] = useState(shippingInfo.city)
    const [postalCode,setPostalCode] = useState(shippingInfo.postalCode)
    const [country,setCountry] = useState(shippingInfo.country)

    const dispatch = useDispatch()
    

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveShimpmentInfo({address,city,postalCode,country}))
        history.push('/payment')
    } 
    return (
        <FormContainer>
            <CheckoutSteps step1 step2/>    
            <h1> Shipping</h1>
            
            <Form onSubmit={handleSubmit}>
                <FormGroup controlId = 'address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type = 'text'
                        value = {address?address : ''}
                        placeholder='Enter your address'
                        onChange = {(e) => {setAddress(e.target.value)}}
                    />
                </FormGroup>
                <Row>
                    <Col md={9}>
                        <FormGroup controlId = 'city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type = 'text'
                                placeholder='Enter your city'
                                value = {city?city : ''}
                                onChange = {(e) => {setCity(e.target.value)}}
                            />
                        </FormGroup>
                
                    </Col>
                    <Col md={3}>
                        <FormGroup controlId = 'postalCode'>
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control
                                type = 'text'
                                placeholder='Enter your postal address'
                                value = {postalCode?postalCode : ''}
                                onChange = {(e) => {setPostalCode(e.target.value)}}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup controlId = 'country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type = 'text'
                        placeholder='Enter your country'
                        value = {country?country : ''}
                        onChange = {(e) => {setCountry(e.target.value)}}
                    />
                </FormGroup>
                <Button
                    type = 'submit'
                    variant='primary'
                >
                    Save
                </Button> 
            </Form>
        </FormContainer>
    )
}

export default Shipping
