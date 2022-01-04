import React from 'react';
import logo from './logo.svg';
import  BlogHeader from './components/Header';
import Calculator from './components/BoilingVerdict';
import LoginControl from './components/LoginControl'
import './App.css';

function App() {
  return (
    <div className="App">
      <BlogHeader></BlogHeader>
      <Calculator></Calculator>
      <LoginControl/>
    </div>
  );
}

export default App;
