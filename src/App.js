import './App.css';
import './components/NavBar.js';
import React, { useState } from 'react';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer.js';
import Home from './components/Home';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import {categories} from './components/Categories'
import Cart from './components/Cart';
import { Container } from 'react-bootstrap';
import {CartProvider} from './contexts/CartContext'

function App() {
  //const [title, setTitle] = useState('Tienda EL DON.')
  const title = "Tienda EL DON"
  
  const [counter, setCounter] = useState(0)
  
  const addCounter = (cantidad) =>
  {
    setCounter(counter + cantidad)
  }

  const decreaceCounter = (cantidad) =>
  {
    setCounter(counter - cantidad)
  }
  const resetCounter = () =>{
    setCounter(0)
  }
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar brand={title} quantity={counter} categories={categories}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/categories/:categoryId">
              <ItemListContainer onAdd={addCounter} onDecreace={decreaceCounter} quantity={counter} />
          </Route>
          <Route path="/items/:itemId" >
            <div className="App-container">
              <ItemDetailContainer onAdd={addCounter} onDecreace={decreaceCounter} quantity={counter} />
            </div>
          </Route>
          <Route exact path="/cart" >
              <Cart resetCounter={resetCounter}/>
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
