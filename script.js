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
 const numBalance = Number(currentBalance)
 const numIncome = Number(currentIncome)
 const numExpense = Number(currentExpense)

    balance.textContent = `$${numBalance.toFixed(2)}`
    income.textContent = `$${numIncome.toFixed(2)}`
    expense.textContent = `$${numExpense.toFixed(2)}`
}

button.addEventListener('click', (e) => {
  e.preventDefault()

  const transName = transactionName.value.trim()
  const transAmount = parseFloat(transactionAmount.value.trim())

  if (transName === '' || transAmount === '' || transAmount === NaN) {
    alert('Enter transaction name and amount to continue')
    return
  }
   currentBalance += transAmount
   if(transAmount > 0){
    currentIncome += transAmount
   }else{
    currentExpense += transAmount
   }

   update_transaction()

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
