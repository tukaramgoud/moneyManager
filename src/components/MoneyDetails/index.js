// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {amount} = props
  return (
    <div className="moneyDetails-container">
      <div className="money-container-green">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image-sizing"
        />
        <div>
          <p className="welcome-text">Your Balance</p>
          <h1 className="richard-name">Rs 4000</h1>
        </div>
      </div>
      <div className="money-container-blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-sizing"
        />
        <div>
          <p className="welcome-text">Your Balance</p>
          <h1 className="richard-name">Rs 4000</h1>
        </div>
      </div>
      <div className="money-container-violet">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expences"
          className="image-sizing"
        />
        <div>
          <p className="welcome-text">Your Balance</p>
          <h1 className="richard-name">Rs 4000</h1>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
