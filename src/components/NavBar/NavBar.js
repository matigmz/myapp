import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import CartWidget from '../CartWidget'

const navBar = () => {

    return ( 
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Compu Tienda</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/HomePage">Inicio</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Computadoras</NavDropdown.Item>
          <NavDropdown.Item href="/ProductsPage">Notebooks</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link"><CartWidget/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default navBar