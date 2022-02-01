const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

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
    showOnPage(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)
showOnPage(myAccount)