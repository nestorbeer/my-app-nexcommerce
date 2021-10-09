import logo from './logo.svg';
import './App.css';
import './components/NavBar.js';
import React, { useState } from 'react';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
function App() {

  const [title, setTitle] = useState('EL DON')
  const handleTitle = () => setTitle('TIENDA EL DON')
  

  return (
    <div className="App">
      <NavBar brand={title} value='2' ontitle={handleTitle}/>
      <header className="App-header">
        <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
