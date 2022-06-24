import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';
import { numberFormat } from '../helpers';

function ProductPage() {
    const { id } = useParams()
    const product = products.find(product => product._id === id);

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Back
            </Link>
            <Row>
                <Col md={6} >
                    <Image src={product.image} alt={product.name}></Image>
                </Col>
                <Col md={3} >
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating stars={product.rating}></Rating>
                            <span className='ml-2'>{product.numReviews}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>Price : {numberFormat(product.price)}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <span>{product.description}</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3} >
                    <Card>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Stock :</Col>
                                        <Col><strong>{product.countInStock} pcs</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status :</Col>
                                        <Col><strong>{product.countInStock >= 0 ? 'In Stock' : 'Out Of Stock' }</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className='btn btn-block' type='button' disabled={product.countInStock === 0}>Add To Chart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductPage