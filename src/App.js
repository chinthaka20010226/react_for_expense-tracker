import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Income_Expense } from './components/Income_Expense';
import { TransactionList } from './components/TransactionList';
import { AddNewTransactionList } from './components/AddNewTransactionList';

import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div class="container">
        <Balance />
        <Income_Expense />
        <TransactionList />
        <AddNewTransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
