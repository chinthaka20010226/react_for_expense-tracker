import React from 'react'

export const Income_Expense = () => {
  return (
    <div className="inc-exp-container">
        <div>
            <h4>INCOME</h4>
            <p id="money-plus" className="money-plus">$0.00</p>
        </div>
        <div>
            <h4>EXPENSE</h4>
            <p id="money-minus" className="money-minus">$0.00</p>
        </div>
    </div>
  )
}
