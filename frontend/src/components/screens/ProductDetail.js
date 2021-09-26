import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap'
import axios from 'axios';
import Rating from '../Rating'
const ProductDetail = ({match}) => {
    const [product,setProduct]= useState([]);
    useEffect( ()=>{
        const fetchProduct = async()=>{
            const {data} = await axios.get(`http://127.0.0.1:8000/api/products/${match.params.id}`)
            setProduct(data)
            console.log(data)
        }
        fetchProduct()
  
    },[])
    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go back</Link>
            <Row>
                <Col md={6}>
                    <Image src={'http://127.0.0.1:8000'+product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>
                                    <Col>
                                        <strong> ${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status: 
                                    </Col>
                                    <Col>
                                        {product.countInStock >0 ? 'In Stock':'Out of Stock'}
                                        
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Row>
                                <Button className="btn-block" disabled={product.countInStock ===0} type="button">Add to Card</Button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetail