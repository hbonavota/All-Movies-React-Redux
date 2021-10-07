import React from 'react';
import Logo from '../../logoFilm.png'
/* import './Navbar.css'; */
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div>
            </div>
            <Container>
                <img id="logo" src={Logo} width="25" height="25" alt="logo" />
                <Navbar.Brand href="/">Movie Search Engine</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/favs">Favorites</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/favs">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}