import logoElDon from '../logo_eldon.gif';
import React from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarttWidget from './CartWidget.js'
import NavItem from '@restart/ui/esm/NavItem';
import { Link } from 'react-router-dom';
import CartSearcher from './CartSearcher';
import './NavBar.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { getFirestore } from "../firebase";
import {collection,query,getDocs} from "firebase/firestore";

function NavBar(props) {
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const db = getFirestore();
    const q = query(
      collection(db, "categories")
    );
    getDocs(q).then((snapshot) => {
      setCategories(
          snapshot.docs.map((doc) => {
            const newCategory = { ...doc.data(), code:doc.id, page:'/categories/' + doc.id};
            return newCategory;
          })
        );
        setLoading(false)
      });
  },[])

  return (
  <div className="nav-container">
          <Navbar bg="secondary" expand="lg" >
          <Container>
          <Navbar.Brand as={Link} to="/home">
                <Image alt="" src={logoElDon} width="60" height="30" className="d-inline-block align-top"/> {' '}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {!loading &&
                  <Nav className="me-auto">
                  { 
                    categories && categories.map((category, index) =><NavItem className="catego"  key={index} eventkey={1} href={category.page}><Nav.Link as={Link} to={category.page}>{category.nombre}</Nav.Link></NavItem>)      
                  }
                </Nav>}
                <CartSearcher></CartSearcher>
                <Link style={{textDecoration: 'none' }} to="/cart"><CarttWidget quantity={props.quantity} add={props.add} decreace={props.decreace} className="d-flex"/></Link>
                </Navbar.Collapse>
          </Container>
          </Navbar>
  </div>  
    )
}

export default NavBar;