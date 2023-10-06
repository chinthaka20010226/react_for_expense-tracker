import React from 'react'

export const AddNewTransactionList = () => {
  return (
    <div class="container">
        <h3>Add new transaction</h3>
        <form id="form">
            <div class="form-control">
                <label for="text">Text</label>
                <input type="text" id="text" placeholder='Enter text...'></input>
            </div>
            <div class="form-control">
                <label for="amount">Amount <br />
                (ingative - expense, positive - income)</label>
                <input type="number" id="amount" placeholder='Enter amount...'></input>
            </div>
            <button class="btn">Add transaction</button>
        </form>
    </div>
  )
}
