import React from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from '../components/FormContainer'
import {Form, Row, Col, ListGroup, Image, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
const PlaceOrder = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {shippingInfo, paymentInfo, cartItems} = cart
    
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price*item.qty,0).toFixed(2)

    const shippingCost = (itemsPrice > 100 ? 0 : 10).toFixed(2)

    const taxCost = (itemsPrice * 0.3).toFixed(2)

    const totalCost =(Number(itemsPrice) + Number(shippingCost)+ Number(taxCost)).toFixed(2)

    const handleSubmit = ()=>{
        console.log('Place Order')
    }
    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item >
                            <h1>Shipping</h1>
                            <p> {shippingInfo.country}, {shippingInfo.postalCode}, {shippingInfo.address}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h1>payment method</h1>
                            <p>Method: {paymentInfo.paymentMethod}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <h1>order items</h1>
                            {
                                cartItems.map((item, index) => (
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={`http://127.0.0.1:8000${item.image}`} alt={item.name} rounded fluid/>
                                                </Col>
                                                <Col>
                                                    <p>{item.name}</p>
                                                </Col>
                                                <Col>
                                                    <p>({item.qty}) * {item.price} = ${(item.qty * item.price).toFixed(2)}</p>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    </ListGroup>
                                ))
                            }
                        </ListGroup.Item>
                    </ListGroup>
                    
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h1>Order Summary</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Items: 
                                </Col>
                                <Col>
                                    $ {itemsPrice}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Shipping: 
                                </Col>
                                <Col>
                                    $ {shippingCost}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Tax: 
                                </Col>
                                <Col>
                                    $ {taxCost}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Total: 
                                </Col>
                                <Col>
                                    $ {totalCost}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Button type="submit" variant="primary" onSubmit={handleSubmit}>Place Order</Button>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrder
