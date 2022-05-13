'use strict'
// targets my second form on edit html
const formTwo = document.querySelector("#form2");
// targets error div on edit.html 
const errorDiv = document.querySelector("#error");
// targets output suggestions div on edit.html
const outputDiv = document.querySelector("#outputSuggestions");
let backlog = getSavedSuggestions()
// Targets suggestions by unique id
const id = location.hash.substring(1);
let suggestions = backlog.find((suggestions) => suggestions.id === id)
// Checks to see if the id exists. If it doesn't it relocates back to our main page.
if (!suggestions) {
  location.assign("index.html");
}
// Adds form that changes user input by pushing a new value inside of the backlog object.
// Also has form validation logic
formTwo.addEventListener("submit", (e) => {
  new AddToForm(e)
});
// refactored form submit logic into a class
class AddToForm {
  constructor(e) {
    e.preventDefault();
    let errors = [];
    let message = formTwo.elements.message.value
    suggestions.message = formTwo.elements.message.value
    if (message === "") {
      errors.push("Please type a message.");
    } else {
      saveSuggestions(backlog);
      location.assign("index.html");
    }
    if (errors.length > 0) {
      errorDiv.textContent = errors.join(", ");
    }
  }
}