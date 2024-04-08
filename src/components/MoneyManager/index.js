import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

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
          <h1 className="richard-name">Hi, Richard</h1>
          <p className="welcome-text">
            Welcome back to your
            <span className="span-element"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="transaction-history-container">
          <div className="transaction-container">
            <h1 className="transaction-headign">Add Transaction</h1>
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
              {transactionTypeOptions.map(eachOne => (
                <option id={eachOne.optionId}>{eachOne.displayText}</option>
              ))}
            </select>
          </div>
          <div className="history-container">
            <h1 className="transaction-headign">History</h1>
            <ul className="unOrdered-list">
              <li className="list-headings">
                <h1 className="each-heading">title</h1>
                <h1 className="each-heading">Amount</h1>
                <h1 className="each-heading">Type</h1>
              </li>
              <TransactionItem />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
