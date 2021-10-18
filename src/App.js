import logo from './logo.svg';
import './App.css';
import './components/NavBar.js';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';



function App() {
  const [title, setTitle] = useState('Tienda EL DON.')

  const nombreTienda = () => 
  {
    const confirma = window.confirm('Esta seguro que desea cambiar el nombre','',true)
    if(confirma){
      const nombre = prompt('Ingresa el nombre nuevo para la tienda.')
      if (nombre != null)setTitle(nombre)
    }
  }
  const handleTitle = () => nombreTienda()

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
    <div className="App">
      <NavBar brand={title} ontitle={handleTitle} quantity={counter} />
      <header className="App-header">
        <ItemListContainer onAdd={addCounter} onDecreace={decreaceCounter} quantity={counter} />
      </header>
    </div>
  );
}

export default App;
