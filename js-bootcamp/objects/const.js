const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

const person = {
    age: 27
}

person.age = 28
// person = {}
// isRaining = false

console.log(person)
showOnPage(person)

// from grade-calc we can make the percentage a const because its only referenced once... (after watching the whole video) and the function but not the letter grades.
