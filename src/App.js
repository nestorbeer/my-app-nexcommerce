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
  
  const addCounter = () =>
  {
    setCounter(counter + 1)
  }

  const decreaceCounter = () =>
  {
    (counter>0)?setCounter(counter - 1):alert('No puede ser menor a cero');
  }

  useEffect(()=>
  {
    console.log('Me ejecute')

  })
  return (
    <div className="App">
      <NavBar brand={title} ontitle={handleTitle} quantity={counter} />
      <header className="App-header">
        <ItemListContainer add={addCounter} decreace={decreaceCounter} />
      </header>
    </div>
  );
}

export default App;
