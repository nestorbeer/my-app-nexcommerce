import logo from './logo.svg';
import './App.css';
import './components/NavBar.js';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer.js';
import Home from './components/Home';
import { BrowserRouter, Switch, Route, Link  } from 'react-router-dom';
import {categories} from './components/Categories'

function App() {
  const [title, setTitle] = useState('Tienda EL DON.')

  const [counter, setCounter] = useState(0)
  
  const addCounter = (cantidad) =>
  {
    setCounter(counter + cantidad)
  }

  const decreaceCounter = (cantidad) =>
  {
    setCounter(counter - cantidad)
  }
  
  return (
    <BrowserRouter>
    <NavBar brand={title} quantity={counter} categories={categories}/>
    <Switch>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/categories/:categoryId">
        <div className="App">
            <ItemListContainer onAdd={addCounter} onDecreace={decreaceCounter} quantity={counter} />
        </div>
      </Route>
      <Route path="/items/:itemId" >
          <div className="App">
            <ItemDetailContainer onAdd={addCounter} onDecreace={decreaceCounter} quantity={counter} />
          </div>
      </Route>
    </Switch>
</BrowserRouter>
  );
}

export default App;
