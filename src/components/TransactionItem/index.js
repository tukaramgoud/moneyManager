// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteItem} = props
  const {title, type, amount, id} = transactionDetails

  const deleteButtonClicked = () => {
    deleteItem(id)
  }
  return (
    <li className="list-headings">
      <h1 className="each-heading-new">{title}</h1>
      <h1 className="each-heading-new">{amount}</h1>
      <h1 className="each-heading-new">{type}</h1>
      <button
        type="button"
        className="delete-button"
        onClick={deleteButtonClicked}
      >
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
