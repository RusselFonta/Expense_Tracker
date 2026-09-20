// initialization of variable
const button = document.querySelector('.add-btn')
const balance = document.querySelector('.balance')
const reset = document.querySelector('.reset')
const income = document.querySelector('.income')
const expense = document.querySelector('.expense')
const transactionName = document.getElementById('transaction')
const transactionAmount = document.getElementById('amount')
const transactionList = document.querySelector('.list')

// conversion to floating number and extraction of initial constant for local storage
let saveTransaction = JSON.parse(localStorage.getItem('saveTransaction')) || []

// convection to string since array, object and value are store in local storage in string form
const saveToLocalStorage = () => {
  localStorage.setItem('saveTransaction', JSON.stringify(saveTransaction))
}

const updateTransaction = () => {
  const currentIncome = saveTransaction
    .filter(currentValue => currentValue.amount > 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)

  const currentExpense = saveTransaction
    .filter(currentValue => currentValue.amount < 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)

  const currentBalance = saveTransaction
    .reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)

  const balanceSign = currentBalance < 0 ? '-' : ''
  const expenseSign = currentExpense < 0 ? '-' : ''

  balance.textContent = `${balanceSign}$${Math.abs(currentBalance).toFixed(2)}`
  income.textContent = `+$${currentIncome.toFixed(2)}`
  expense.textContent = `${expenseSign}$${Math.abs(currentExpense).toFixed(2)}`
}

// function to create new tag and application of border style base transAmount
function renderTransactionDOM (trans) {
  const newTransaction = document.createElement('li')
  newTransaction.style.borderRight = trans.amount < 0 ? '4px solid #ff0000' : '4px solid #03fc5e'

  const sign = trans.amount < 0 ? '-' : '+'
  const formattedAmount = Math.abs(trans.amount).toFixed(2)

  const nameSpan = document.createElement('span')
  nameSpan.textContent = trans.name

  const amountSpan = document.createElement('span')
  amountSpan.textContent = `${sign}$${formattedAmount}`

  const deleteTransaction = document.createElement('button')
  deleteTransaction.textContent = 'X'
  deleteTransaction.className = 'delete-trans'

  // event listener to delete a transaction base on the transaction id
  deleteTransaction.addEventListener('click', () => {
    saveTransaction = saveTransaction.filter(tr => tr.id !== trans.id)

    newTransaction.remove()
    saveToLocalStorage()
    updateTransaction()
  })

  newTransaction.appendChild(nameSpan)
  newTransaction.appendChild(amountSpan)
  newTransaction.appendChild(deleteTransaction)
  transactionList.appendChild(newTransaction)
}

button.addEventListener('click', (e) => {
  e.preventDefault()

  // tracking user input and verification of the content
  const transName = transactionName.value.trim()
  const transAmount = parseFloat(transactionAmount.value.trim())

  if (transName === '' || isNaN(transAmount) || transAmount === 0) {
    alert("Enter a transaction name and amount to continue and the amount enter can't be zero")
    return
  }

  // initialization of an object that will be use as parameter in function
  const transation = {
    id: Date.now(),
    name: transName,
    amount: transAmount
  }

  saveTransaction.push(transation)

  renderTransactionDOM(transation)
  saveToLocalStorage()
  updateTransaction()

  transactionName.value = ''
  transactionAmount.value = ''
})

// reset button to clear the entire information include the one in the local storage
reset.addEventListener('click', () => {
  if (confirm("Do you want to reset everything'history ?")) {
    localStorage.clear()
    saveTransaction = []
    transactionList.innerHTML = ''

    updateTransaction()
  }
})

const init = () => {
  transactionList.innerHTML = ''
  saveTransaction.forEach(renderTransactionDOM)
  updateTransaction()
}

init()
