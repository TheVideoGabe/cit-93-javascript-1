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

// delete 3rd item
// add a new item at the end
// remove the first item on the list
// splice = left position on index - right how many removed after it and insert other strings.
toDoList.splice(2,1)
toDoList.push('poop')
// console.log(toDoList.shift())
// console.log(toDoList)
showOnPage(toDoList.shift())
showOnPage(toDoList)



// console.log(toDoList[0])
// console.log(toDoList[3])
// showOnPage(toDoList[0])
// showOnPage(toDoList[3])

// forgot to use length to create a x todo list.
// console.log(`I have ${toDoList.length} things to do...`)
// showOnPage(`I have ${toDoList.length} things to do...`)
// andrews solution
// const todos = ['order cat food', 'clean kitchen', 'buy food', 'do work', 'excercise']

// console.log(`you have ${todos.length} todos!`)
// console.log(`todo: ${todo[0]}`)
// console.log(`todo: ${todo[todos.length - 2]}`)
