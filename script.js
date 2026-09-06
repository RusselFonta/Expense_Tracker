const button = document.querySelector('.add-btn')
const balance = document.querySelector('.balance')
const income = document.querySelector('.income')
const expense = document.querySelector('.expense')
const transactionName = document.getElementById('transaction')
const transactionAmount = document.getElementById('amount')
const transactionList = document.querySelector('.transactionList')

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