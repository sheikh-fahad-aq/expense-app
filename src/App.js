import React from 'react';
import './App.css';
import Child from './child';
import {TransactionProvider} from './transactionContext';



function App() {
  return (
    <div className="App" >
      <TransactionProvider>
      <Child />
      </TransactionProvider>
    </div>
  );
}

export default App;
