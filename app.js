'use strict'
let backlog = getSavedSuggestions()
// links error to select the error div on our index.html file
const error = document.querySelector("#error");
// target form and add event listener when you sumbit the form.
document.querySelector("form").addEventListener("submit", (e) => {
  new RunForm(e)
})
// refactored form submit into a class
class RunForm {
  constructor(e) {
    e.preventDefault();
    // resets the error div.
    error.innerHTML = "";
    // extracts the form values so we can access them.
    const name = form.elements.name.value;
    // create an empty errors array
    let errors = [];
    // Add form authentication.
    if (name === "") {
      error.textContent = "Please Type Your Name.";
      // Push input to our local storage.
    } else {
      getPerson().then((data) => {
        let person = data.results[0]
        const id = uuidv4()
        backlog.push({
          yourName: name.toUpperCase(),
          id: id,
          name: `${person.name.first} ${person.name.last}`,
          city: `${person.location.city}, ${person.location.state}`,
          picture: person.picture.large
        })
        // renders the inputs into the page.
        new RenderForm(backlog)
        // saves to local storage
        saveSuggestions(backlog);
      }).catch((err) => {
        console.log(err)
      })
      // reset our form to default after submit.
      document.getElementById("form").reset();
      new RenderForm(backlog)
    } if (errors.length > 0) {
      error.textContent = errors.join(", ");
    }
  }
}
new RenderForm(backlog)
