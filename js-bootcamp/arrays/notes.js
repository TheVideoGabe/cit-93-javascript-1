// //  const showOnPage = function (text) {
// //      let newParagraph = document.createElement("p");
// //      newParagraph.innerHTML = text;
// //      let outputDiv = document.getElementById("output");
// //      outputDiv.append(newParagraph);
// //    };

// const notes = ['note 1', 'note 2', 'note 3']

// // console.log(notes.pop())
// // notes.push('My new note')

// // console.log(notes.shift())
// // console.log(notes.unshift('My first note'))

// // notes.splice(1, 1, 'This is the new note 2')

// notes[2] = 'Newer note 3'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
//     // showOnPage(index)
//     // showOnPage(item)
// })

// console.log(notes.length)
// // console.log(notes[0])
// console.log(notes)
// // showOnPage(notes)
// //  showOnPage(notes.length)
// //  showOnPage(notes[0])
// // showOnPage(notes[notes.length - 2])


// // counting... 1

// for (let count = 0; count <= 2; count ++) {
//     console.log(count)
// }

// // for (let count = 2; count >= 0; count --) {
// //     console.log(count)
// // }

// for (let count = 0; count < notes.length; count ++) {
//     console.log(notes[count])
// }

// for (let count = notes.length -1; count >= 0; count --) {
//     console.log(notes[count])
// }

const notes = [{}, {
    title: 'my next trip',
    body: 'I want to go to Italy',
}, {
    title: 'Habbits to improve on',
    body: 'Playing guitar more often',
}, {
    title: 'Amazon purchases',
    body: 'get christmas gifts for family',
}]

// console.log(notes.length)
// console.log(notes)
// let someObject = {}
// let otherObject = someObject
// console.log(otherObject === otherObject)
// console.log(notes.indexOf('note 2'))

 console.log(notes.length)
 console.log(notes)

 const index = notes.findIndex(function (note, index) {
     console.log(note)
     return note.title === 'Habbits to improve on'
 })
 console.log(index)