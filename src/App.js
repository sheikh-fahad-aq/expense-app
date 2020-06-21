import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner';


function App() {
  return (
    <div className="App">
      <Dinner dishName="Nihaari" sweetDish="Kheer" />
    </div>
  );
}

export default App;
