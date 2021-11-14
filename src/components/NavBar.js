import logoElDon from '../logo_eldon.gif';
import React from 'react';
import { Container, Navbar, Nav, Image, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarttWidget from './CartWidget.js'
import NavItem from '@restart/ui/esm/NavItem';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <Container fluid>
      <Row>
        <Col xs={8} md={10} lg={12}>
          <Navbar bg="secondary" expand="lg">
          <Container>
          <Navbar.Brand as={Link} to="/home">
                <Image alt="" src={logoElDon} width="60" height="30" className="d-inline-block align-top"/> {' '}
              </Navbar.Brand>
          
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  { 
                    props.categories && props.categories.map((category, index) =><NavItem key={index} eventkey={1} href={category.page}><Nav.Link as={Link} to={category.page}>{category.nombre}</Nav.Link></NavItem>)      
                  }
                </Nav>
                </Navbar.Collapse>
                <Link to="/cart"><CarttWidget quantity={props.quantity} add={props.add} decreace={props.decreace} className="d-flex"/></Link>
          </Container>
          </Navbar>
        </Col>
    </Row>
    </Container>
  )
}

export default NavBar;