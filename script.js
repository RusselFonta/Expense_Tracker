const button = document.querySelector('.add-btn')
const balance = document.querySelector('.balance')
const reset = document.querySelector('.reset') // Bien configuré ici !
const income = document.querySelector('.income')
const expense = document.querySelector('.expense')
const transactionName = document.getElementById('transaction')
const transactionAmount = document.getElementById('amount')
const transactionList = document.querySelector('.list')

let currentIncome = parseFloat(localStorage.getItem('currentIncome')) || 0
let currentExpense = parseFloat(localStorage.getItem('currentExpense')) || 0
let currentBalance = parseFloat(localStorage.getItem('currentBalance')) || 0
let saveTransaction = JSON.parse(localStorage.getItem('saveTransaction')) || []

const saveToLocalStorage = () => {
    localStorage.setItem('currentIncome', currentIncome)
    localStorage.setItem('currentExpense', currentExpense)
    localStorage.setItem('currentBalance', currentBalance)
    localStorage.setItem('saveTransaction', JSON.stringify(saveTransaction))
}

const update_transaction = () => {
    const numBalance = Number(currentBalance)
    const numIncome = Number(currentIncome)
    const numExpense = Number(currentExpense)

    balance.textContent = `$${numBalance.toFixed(2)}`
    income.textContent = `$${numIncome.toFixed(2)}`
    expense.textContent = `$${numExpense.toFixed(2)}`
}

function renderTransactionDOM(trans) {
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
    deleteTransaction.className = 'delete_trans'

    deleteTransaction.addEventListener('click', () => {
        saveTransaction = saveTransaction.filter(tr => tr.id !== trans.id)

        currentBalance -= trans.amount
        if (trans.amount > 0) {
            currentIncome -= trans.amount
        } else {
            currentExpense -= trans.amount
        }

        newTransaction.remove()
        saveToLocalStorage()
        update_transaction()
    })

    newTransaction.appendChild(nameSpan)
    newTransaction.appendChild(amountSpan)
    newTransaction.appendChild(deleteTransaction)
    transactionList.appendChild(newTransaction)
}

// Événement d'ajout (PROPRE ET FERMÉ)
button.addEventListener('click', (e) => {
    e.preventDefault()

    const transName = transactionName.value.trim()
    const transAmount = parseFloat(transactionAmount.value.trim())

    if (transName === '' || isNaN(transAmount)) {
        alert('Enter transaction name and amount to continue')
        return
    }

    const transation = {
        id: Date.now(),
        name: transName,
        amount: transAmount,
    }

    currentBalance += transation.amount
    if (transation.amount > 0) {
        currentIncome += transation.amount
    } else {
        currentExpense += transation.amount
    }

    saveTransaction.push(transation)

    renderTransactionDOM(transation)
    saveToLocalStorage()
    update_transaction()

    transactionName.value = ''
    transactionAmount.value = ''
})


reset.addEventListener('click', () => {
    if (confirm('Do you want to reset everything\'historique ?')) {
        localStorage.clear()
        currentIncome = 0
        currentExpense = 0
        currentBalance = 0
        saveTransaction = []
        transactionList.innerHTML = ''

        update_transaction()
    }
})

const init = () => {
    transactionList.innerHTML = ''
    saveTransaction.forEach(renderTransactionDOM)
    update_transaction()
}

init()
