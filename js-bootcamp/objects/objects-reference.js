// const showOnPage = function (text) {
//     let newParagraph = document.createElement("p");
//     newParagraph.innerHTML = text;
//     let outputDiv = document.getElementById("output");
//     outputDiv.append(newParagraph);
//   };

let myAccount = {
    name: 'Gabriel',
    expenses: 0,
    income:0
}

let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}

let addExpense = function(account, amount) {
   // account = 1
     account.expenses = account.expenses + amount
    console.log(account)
    // showOnPage(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)
// showOnPage(myAccount)

// ** challenge **
// add income
// resetaccount
// get account summary
// account for gabriel has 900$ in income. 100$ in expenses.
// addIncome, addExpense, addExpense2, getAccountSummary, resetAccount, getAccountSummary

let bankAccount = {
    name: 'Gabriel',
    deposit: 0,
    spent: 0,
    taxed: 0
}

let depositMoney = function (bankAccount, deposit) {
    bankAccount.deposit = bankAccount.deposit + deposit
}

let expense = function (bankAccount, spent) {
    bankAccount.spent = bankAccount.spent + spent
}

let tax = function (bankAccount, taxed) {
    bankAccount.taxed = bankAccount.spent + (bankAccount.spent * taxed)
}

let reset = function (bankAccount) {
    bankAccount.expenses = 0,
    bankAccount.income = 0
}

let summary = function (bankAccount) {
    let balance = bankAccount.deposit - bankAccount.spent
    return `${bankAccount.name}'s Bank account has an amount of ${bankAccount.deposit}$. And just spent ${bankAccount.spent}$ on stuff. A total of ${bankAccount.taxed}$ after taxes. The total balance left on the account is ${balance}$.`
}

depositMoney(bankAccount, 6000)
expense(bankAccount, 500)
expense(bankAccount, 500)
tax(bankAccount, 0.08)
console.log(summary(bankAccount))
(showOnPage(summary(bankAccount)))
