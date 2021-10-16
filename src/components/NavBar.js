import logo from '../logo.svg';
import logoElDon from '../logo_eldon.gif';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarttWidget from './CartWidget.js'
import Categories from '../components/Categories.js';

function NavBar(props) {

  return (
    <div>
    <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#" onClick={props.ontitle}>
        <img
          alt=""
          src={logoElDon}
          width="60"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      {props.brand}
      </Navbar.Brand>
      <Nav className="me-auto" variant="light">
        {Categories().map(category => 
            (
              <Nav.Link href={category.page} >{category.nombre}</Nav.Link>
            )
          )
        }
      </Nav>
      <CarttWidget quantity={props.quantity} add={props.add} decreace={props.decreace} />
      </Container>
      
    </Navbar>
</div>
  )
}

export default NavBar;