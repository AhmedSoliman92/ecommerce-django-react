import React, {useState} from 'react'
import FormContainer from '../components/FormContainer'
import {Form, FormGroup,Col, Button, } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {savePaymentInfo} from '../actions/cartActions'
const Payment = ({history}) => {
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {shippingInfo} = cart

    if(!shippingInfo.address){
        history.push('/shipping')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(savePaymentInfo({paymentMethod}))
        history.push('/placeholder')
    }
    return (
        <FormContainer>
            <h1>Payment</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup controlId = "paymentMethod">
                    <Form.Label as= 'legend'>Select Method</Form.Label>
                    <Col>
                        <Form.Check
                            type = "radio"
                            label = 'PayPal or Creadit Card'
                            id ='paypal'
                            name = 'paymentmethod'
                            checked
                            onChange = {(e)=> {setPaymentMethod(e.target.value)}}
                        />
                    </Col>
                </FormGroup>
                <Button type="submit" variant="primary">Next</Button>
            </Form>
        </FormContainer>
    )
}

export default Payment
