import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'
// Write your code here
const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="name-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager </p>
        </div>
        <MoneyDetails />
        <div className="transaction-history-container">
          <div className="transaction-container">
            <h1>Add Transaction</h1>
            <label htmlFor="title" className="title">
              TITLE
            </label>
            <input id="title" className="input-title" placeholder="TITLE" />

            <label htmlFor="amount" className="title">
              AMOUNT
            </label>
            <input id="amount" className="input-title" placeholder="AMOUNT" />

            <label htmlFor="type" className="title">
              TYPE
            </label>
            <select id="type" className="input-title" placeholder="TYPE">
              <option>Income</option>
              <option>Expenditure</option>
            </select>
          </div>
          <div className="history-container">
            <h1>History</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
