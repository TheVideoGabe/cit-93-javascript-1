const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

const account = {
    name: 'Gabriel Corral',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.unshift({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalAmount = 0
        let totalIncome = 0
        this.expenses.forEach(function (addExpenses) {
            totalAmount = totalAmount + addExpenses.amount
        })
        this.income.forEach(function (getIncome) {
            totalIncome = totalIncome + getIncome.amount
        })
        accountBalance = totalIncome - totalAmount
        return `${this.name} has a balance of ${accountBalance}$. ${totalIncome}$ in income. ${totalAmount} in expenses.`
    },
    addIncome: function (description, amount) {
        this.income.unshift({
            description: description,
            amount: amount
        })
    },
}

// we have expenses which include -> description, amount
// create two methods
// add expense -> description ammount
//add acount summary -> total up all expenses(for each, add to a variable) -> Gabriel C has 1250$ in expenses.

// add income array to account looks like the expenses one.
// add income method that takes a description and an amount.
//tweak getaccount summary

// Should look like "Name has a balance of $10, $100 in income, $90 in expenses."

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
// console.log(account.getAccountSummary())
showOnPage(account.getAccountSummary())

// part 1 andrews solution
// const account = {
//     name: 'Andrew Mead',
//     expenses: [],
//     addExpense: function (description, amount) {
//         this.expenses.push({
//             description: description,
//             amount: amount
//         })
//     },
//     getAccountSummary: function () {
//         let totalExpenses = 0
//         this.expenses.forEach(function (expense) {
//             totalExpenses = totalExpenses + expense.amount
//         })
//         return `${this.name} has ${totalExpenses} in expenses.`
//     }
// }

// account.addExpense('Rent', 950)
// account.addExpense('Coffee', 2)
// console.log(account.getAccountSummary())

// part 2 andrrews solution

const account = {
        name: 'Andrew Mead',
        expenses: [],
        addExpense: function (description, amount) {
            this.expenses.push({
                description: description,
                amount: amount
            })
        },
        addIncome: function (description, amount) {
            this.income.push( {
                description: description,
                amount: amount
            })
        },
        getAccountSummary: function () {
            let totalExpenses = 0
            let totalIncome = 0
            let accountBalance = 0

            this.expenses.forEach(function (expense) {
                totalExpenses = totalExpenses + expense.amount
            })

            this.income.forEach(function (income) {
                totalIncome = totalIncome + income.amount
            })
            
            return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalAmount} in expenses.`

        }
    }
    
    account.addExpense('Rent', 950)
    account.addExpense('Coffee', 2)
    console.log(account.getAccountSummary())