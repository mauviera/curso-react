import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting={"No hay productos!"} />
    </div>
        );
}

export default App;
