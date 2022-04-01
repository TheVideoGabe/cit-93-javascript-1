'use strict'
// links backlog to the saved suggestions function on our functions,js file.
let backlog = getSavedSuggestions()
// links error to select the error div on our index.html file
const error = document.querySelector("#error");
// Create form and add event listener to sumbit the form.
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    // resets the error div.
    error.innerHTML = "";
    // extracts the form values so we can access them.
    const name = form.elements.name.value;
    const genre = form.elements.genre.value;
    const console = form.elements.console.value;
    const id = uuidv4();
    const timestamp = moment().valueOf();
    let helpfulness = '';
    // create an empty errors array
    let errors = [];
    // Add form authentication.
    if (name === "" || genre === "0" || console === "0") {
        error.textContent = "Please fill out form.";
        // Push input to our local storage.
    } else {
            backlog.push({
              id: uuidv4(),
              currentDate: timestamp,
               name: name,
              genre: genre,
              console: console,
              helpfulness: '',
            });
            // reset our form to default after submit.
    document.getElementById("form").reset();
    // Saves our local storage.
    saveSuggestions(backlog)
    // changes the background color of our output div everythime we create a suggestion
    output.style.backgroundColor = colors[index];
    //cycles through the chosen colors inside of the colors var
        index = index >= colors.length - 1 ? 0 : index + 1;
    // renders the inputs into the page.
            renderForm(backlog)
} if (errors.length > 0) {
        error.textContent = errors.join(", ");
      }
})
// Keeps the old divs visible on the page.
renderForm(backlog)
