import logoElDon from '../logo_eldon.gif';
import React from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarttWidget from './CartWidget.js'
import { Link } from 'react-router-dom';
import CartSearcher from './CartSearcher';
import './NavBar.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { getFirestore } from "../firebase";
import {collection,query,getDocs} from "firebase/firestore";
import Loader from './loader';

function NavBar(props) {
  const [categories, setCategories] = useState(null)
     
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
      });
  },[])

  return (
  <div className="nav-container">
          <Navbar bg="secondary" expand="lg" collapseOnSelect>
          <Container>
          <Navbar.Brand as={Link} to="/home">
                <Image alt="" src={logoElDon} width="60" height="30" className="d-inline-block align-top"/> {' '}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  { 
                    categories && categories.map((category, index) =><Link key={index} className="catego" to={category.page}>{category.nombre}</Link>)      
                  }
                  {
                    !categories&&<Loader/>
                  }
                </Nav>
                <CartSearcher></CartSearcher>
                <Link style={{textDecoration: 'none' }} to="/cart"><CarttWidget quantity={props.quantity} add={props.add} decreace={props.decreace} className="d-flex"/></Link>
                </Navbar.Collapse>
          </Container>
          </Navbar>
  </div>  
    )
}

export default NavBar;