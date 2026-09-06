const button = document.querySelector('.add-btn')
const balance = document.querySelector('.balance')
const income = document.querySelector('.income')
const expense = document.querySelector('.expense')
const transactionName = document.getElementById('transaction')
const transactionAmount = document.getElementById('amount')
const transactionList = document.querySelector('.list')

let currentIncome = 0
let currentExpense = 0
let currentBalance = 0

const update_transaction = () => {
    balance.textContent = `$${currentBalance.toFixed(2)}`
    income.textContent = `$${currentIncome.toFixed(2)}`
    balance.textContent = `$${currentBalance.toFixed(2)}`
}

button.addEventListener('click', (e) => {
  e.preventDefault()

  const transName = transactionName.value.trim()
  const transAmount = transactionAmount.value.trim()

  if (transName === '' || transAmount === '') {
    alert('Enter transaction name and amount to continue')
    return
  }

  const newTransaction = document.createElement('li')
  const deleteTransaction = document.createElement('button')
  deleteTransaction.textContent = 'X'
  deleteTransaction.className = 'delete_trans'

  deleteTransaction.addEventListener('click', () => {
    newTransaction.remove()
  })

  newTransaction.textContent = `${transName} ${transAmount} `
  newTransaction.appendChild(deleteTransaction)
  transactionList.appendChild(newTransaction)

  transactionName.value = ''
  transactionAmount.value = ''
})
