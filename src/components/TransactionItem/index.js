// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  return (
    <li className="list-headings">
      <h1 className="each-heading-new">salary</h1>
      <h1 className="each-heading-new">40000</h1>
      <h1 className="each-heading-new">Expenditure</h1>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}
export default TransactionItem
