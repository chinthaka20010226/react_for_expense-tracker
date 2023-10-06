import React from 'react'

export const Income_Expense = () => {
  return (
    <div class="inc-exp-container">
        <div>
            <h4>INCOME</h4>
            <p id="money-plus" class="money-plus">$0.00</p>
        </div>
        <div>
            <h4>EXPENSE</h4>
            <p id="money-minus" class="money-minus">$0.00</p>
        </div>
    </div>
  )
}
