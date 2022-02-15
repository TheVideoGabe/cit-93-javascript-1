const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

const account = {
    name: 'Gabriel Corral',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.unshift({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalAmount = 0
        this.expenses.forEach(function (addExpenses) {
            totalAmount = totalAmount + addExpenses.amount
        })
        return `${this.name} has ${totalAmount} in expenses.`
    }
}

// we have expenses which include -> description, amount
// create two methods
// add expense -> description ammount
//add acount summary -> total up all expenses(for each, add to a variable) -> Gabriel C has 1250$ in expenses.


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
// console.log(account.getAccountSummary())
showOnPage(account.getAccountSummary())

// part 1 andrews solution
const account = {
    name: 'Andrew Mead',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })
        return `${this.name} has ${totalExpenses} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())