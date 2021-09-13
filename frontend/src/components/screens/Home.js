import React, {useState,useEffect} from 'react';
import { Row,Col } from 'react-bootstrap';
import Product from '../Product';
import axios from 'axios';
const Home = () => {
    const [products,setProducts]= useState([]);
    useEffect( ()=>{
        const fetchData = async()=>{
            const {data} = await axios.get('http://127.0.0.1:8000/api/products')
            setProducts(data)
        }
        fetchData()
        
    },[])
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
