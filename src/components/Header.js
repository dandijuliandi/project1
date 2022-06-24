import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons' ;

function Header() {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to={'/'}>
                    <Navbar.Brand href='#'>IDShop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ml-auto">
                        <LinkContainer to={'/chart'}>
                            <Nav.Link> <FontAwesomeIcon icon={faShoppingCart}/> Chart </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/chart'}>
                            <Nav.Link><FontAwesomeIcon icon={faUser}/> Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header