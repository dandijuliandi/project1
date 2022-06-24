import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating.js';

function Product({ product }) {
    return (
        <>
            <Card className='my-3 py-3 rounded h-100'>
                <Card.Body>
                    <Card.Img src={product.image}></Card.Img>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title className='mt-3'><strong>{product.name}</strong> </Card.Title>
                    </Link>
                    <Card.Subtitle className='mt-3'>Rp. {product.price}</Card.Subtitle>
                    <div className="d-block mt-3">
                        <Rating stars={product.rating}></Rating>
                    </div>
                    <Card.Text>
                        <small>{product.rating} from {product.numReviews}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product