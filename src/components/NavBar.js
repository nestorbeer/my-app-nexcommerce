import logoElDon from '../logo_eldon.gif';
import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
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
import OrderSearcher from './OrderSearcher';

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
          <Navbar bg="secondary" collapseOnSelect expand="xl" >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={Link} to="/home" style={{marginLeft:'10rem', textAlign:'left'}}>
                <Image alt="logo el don" src={logoElDon} width="60" height="30" style={{boxShadow: '0 0 25px 0 black'}}/> {' '}
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  { 
                    categories && categories.map((category, index) =><Nav.Item key={index}><Nav.Link key={index} eventKey={index} as={Link} className="catego" to={category.page}>{category.nombre}</Nav.Link></Nav.Item>)      
                  }
                  {
                    !categories&&<Loader/>
                  }
                </Nav>
                <OrderSearcher></OrderSearcher>
                <CartSearcher></CartSearcher>
                <Link style={{textDecoration: 'none', marginRight:'10Rem' }} to="/cart"><CarttWidget quantity={props.quantity} add={props.add} decreace={props.decreace} className="d-flex"/></Link>
                </Navbar.Collapse>
          </Navbar>
      )
}

export default NavBar;