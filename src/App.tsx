import React from 'react';
import logo from './logo.svg';
import  BlogHeader from './components/Header';
import Calculator from './components/BoilingVerdict';
import Father from './components/Sloat';
import LoginControl from './components/LoginControl'
import Demo  from './components/Demo';
import './App.css';
import { chown } from 'fs/promises';

function App() {
  return (
    <div className="App">
      <Demo></Demo>
    </div>
  );
}


export default App;
