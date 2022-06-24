import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.js';
import products from '../products.js';

function HomePage() {
return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} className='mb-3'>
                        <Product product={product}></Product>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomePage