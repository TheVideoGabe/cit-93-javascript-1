 const showOnPage = function (text) {
     let newParagraph = document.createElement("p");
     newParagraph.innerHTML = text;
     let outputDiv = document.getElementById("output");
     outputDiv.append(newParagraph);
   };

const notes = ['note 1', 'note 2', 'note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// console.log(notes.unshift('My first note'))

// notes.splice(1, 1, 'This is the new note 2')

notes[2] = 'Newer note 3'

notes.forEach(function (item, index) {
    console.log(index)
    console.log(item)
    showOnPage(index)
    showOnPage(item)
})

console.log(notes.length)
// console.log(notes[0])
console.log(notes)
showOnPage(notes)
 showOnPage(notes.length)
 showOnPage(notes[0])
// showOnPage(notes[notes.length - 2])
