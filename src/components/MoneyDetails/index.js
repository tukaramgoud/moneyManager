// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {listItem} = props

  let sumOfAmount = 0
  let expenditure = 0
  let income = 0

  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].type === 'Income') {
      sumOfAmount += parseInt(listItem[i].amount)
      income += parseInt(listItem[i].amount)
    } else if (listItem[i].type === 'Expenses') {
      sumOfAmount -= parseInt(listItem[i].amount)
      expenditure += parseInt(listItem[i].amount)
    }
  }
  console.log(sumOfAmount, expenditure, income)
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
          <h1
            className="richard-name"
            data-testid="balanceAmount"
            value={sumOfAmount}
          >
            Rs {sumOfAmount}
          </h1>
        </div>
      </div>
      <div className="money-container-blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image-sizing"
        />
        <div>
          <p className="welcome-text">Your Income</p>
          <h1
            className="richard-name"
            data-testid="incomeAmount"
            value={income}
          >
            Rs {income}
          </h1>
        </div>
      </div>
      <div className="money-container-violet">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image-sizing"
        />
        <div>
          <p className="welcome-text">Your Expenses</p>
          <h1 className="richard-name" data-testid="expensesAmount">
            Rs {expenditure}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
