import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Income_Expense } from './components/Income_Expense';
import { TransactionList } from './components/TransactionList';
import { AddNewTransactionList } from './components/AddNewTransactionList'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <Income_Expense />
      <TransactionList />
      <AddNewTransactionList />
    </div>
  );
}

export default App;
