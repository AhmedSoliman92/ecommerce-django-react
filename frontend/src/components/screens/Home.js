import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../Product'
import products from '../products'
const Home = () => {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={8} lg={6} xl={4}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home
