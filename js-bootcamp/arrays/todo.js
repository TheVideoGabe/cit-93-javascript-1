const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

// create an array with 5 to do's
// you have x to do's
// print the first and second to last tiems -> walk the dog

const toDoList = ['Wake up', 'Eat Breakfast', 'Brush My Teeth', 'Take A Shower', 'Go Excercise']

console.log(toDoList[0])
console.log(toDoList[3])
showOnPage(toDoList[0])
showOnPage(toDoList[3])