import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
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
  state = {title: '', amount: '', type: 'Income', moneyDetailsList: []}

  formIsSubmitted = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    console.log(title, amount, type)
    const newItem = {
      id: uuidV4(),
      title,
      amount,
      type,
    }
    this.setState(pervState => ({
      moneyDetailsList: [...pervState.moneyDetailsList, newItem],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  titleChanged = event => {
    this.setState({title: event.target.value})
  }

  amountChanged = event => {
    this.setState({amount: event.target.value})
  }

  typeChanged = event => {
    this.setState({type: event.target.value})
  }

  deleteItem = id => {
    const {moneyDetailsList} = this.state
    const filterList = moneyDetailsList.filter(eachOne => eachOne.id !== id)
    this.setState({moneyDetailsList: filterList})
  }

  render() {
    const {title, amount, type, moneyDetailsList} = this.state

    return (
      <div className="main-container">
        <div className="name-container">
          <h1 className="richard-name">Hi, Richard</h1>
          <p className="welcome-text">
            Welcome back to your
            <span className="span-element"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails listItem={moneyDetailsList} />
        <div className="transaction-history-container">
          <form
            className="transaction-container"
            onSubmit={this.formIsSubmitted}
          >
            <h1 className="transaction-headign">Add Transaction</h1>
            <label htmlFor="title" className="title">
              TITLE
            </label>
            <input
              id="title"
              className="input-title"
              placeholder="TITLE"
              onChange={this.titleChanged}
              value={title}
            />

            <label htmlFor="amount" className="title">
              AMOUNT
            </label>
            <input
              id="amount"
              className="input-title"
              placeholder="AMOUNT"
              onChange={this.amountChanged}
              value={amount}
            />

            <label htmlFor="type" className="title">
              TYPE
            </label>

            <select
              id="type"
              className="input-title"
              value={type}
              placeholder="TYPE"
              onChange={this.typeChanged}
            >
              {transactionTypeOptions.map(eachOne => (
                <option id={eachOne.optionId} key={eachOne.optionId}>
                  {eachOne.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="submit-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="transaction-headign another-one">History</h1>
            <ul className="unOrdered-list">
              <li className="list-headings">
                <p className="each-heading">Title</p>
                <p className="each-heading">Amount</p>
                <p className="each-heading">Type</p>
              </li>
              {moneyDetailsList.map(eachOne => (
                <TransactionItem
                  transactionDetails={eachOne}
                  key={eachOne.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
