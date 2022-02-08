const showOnPage = function (text) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = text;
    let outputDiv = document.getElementById("output");
    outputDiv.append(newParagraph);
  };

const notes = ['note 1', 'note 2', 'note 3']

console.log(notes.length)
console.log(notes[0])
console.log(notes[notes.length - 2])
showOnPage(notes.length)
showOnPage(notes[0])
showOnPage(notes[notes.length - 2])
