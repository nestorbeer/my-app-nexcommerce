import './App.css';
import './components/NavBar.js';
import React from 'react';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer.js';
import Home from './components/Home';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Cart from './components/Cart';
import { Container } from 'react-bootstrap';
import {CartProvider} from './contexts/CartContext'

function App() {
  const title = "Tienda EL DON"
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar brand={title}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/categories/:categoryId">
              <ItemListContainer />
          </Route>
          <Route path="/filter/:filter">
              <ItemListContainer />
          </Route>
          <Route path="/items/:itemId" >
            <div className="App-container">
              <ItemDetailContainer/>
            </div>
          </Route>
          <Route exact path="/cart" >
              <Cart/>
          </Route>
          <Route path="/*" >
              <Container><h1><b>Page not found 404</b></h1></Container>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
