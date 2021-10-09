import logo from '../logo.svg';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const alertName = () => alert('hola')

function NavBar(props) {
  return (
    <div>
    <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#" onClick={props.ontitle}>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      {props.brand}
      </Navbar.Brand>
      <Nav className="me-auto" variant="light">
        <Nav.Link href="#">Remeras</Nav.Link>
        <Nav.Link href="#">Shorts de baños</Nav.Link>
        <Nav.Link href="#">Musculosas</Nav.Link>
        <Nav.Link href="#">Accesorios</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
</div>
  )
}

export default NavBar;