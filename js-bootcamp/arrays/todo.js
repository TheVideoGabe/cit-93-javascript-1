//    const showOnPage = function (text) {
//        let newParagraph = document.createElement("p");
//        newParagraph.innerHTML = text;
//        let outputDiv = document.getElementById("output");
//        outputDiv.append(newParagraph);
//      };

// // create an array with 5 to do's
// // you have x to do's
// // print the first and second to last tiems -> walk the dog

// const toDoList = ['Wake up', 'Eat Breakfast', 'Brush My Teeth', 'Take A Shower', 'Go Excercise']

// // delete 3rd item
// // add a new item at the end
// // remove the first item on the list
// // splice = left position on index - right how many removed after it and insert other strings.
// toDoList.splice(2,1)
// toDoList.push('poop')
// //  console.log(toDoList.shift())
// // console.log(toDoList)
//   showOnPage(toDoList.shift())
// // showOnPage(toDoList)
// // toDoList.forEach(function (item, index) {
// //     console.log(`Item Number ${index + 1} on my to do list is to ${item}`)
// //     // showOnPage(`Item Number ${index + 1} on my to do list is to ${item}`)
// //     // console.log(item)
// // })

// for (let count = 0; count < toDoList.length; count ++) {
//     const num = count + 1
//     console.log(`${num}. ${toDoList[count]}`)
//     showOnPage(`${num}. ${toDoList[count]}`)
// }
// // That was a little hard. but it makes sense.

// // andrews solution video 41 
// for (let count = 0; count < todo.length; count ++) {
//     const num = count + 1
//     const todo = todos[count]
//     // console.log(`${num}. ${toDoList[count]}`)
//     showOnPage(`${num}. ${toDoList[count]}`)
// }


// // andrewssolution video 40
// // console.log(`you have ${todos.length} todos!`)

// // toDoList.forEach(function (todo, index) {
// //     const num = index + 1
// //     console.log(`${num}. ${todo}`)
// // })


// // // andrews solution
// //  const todos = ['order cat food', 'clean kitchen', 'buy food', 'do work', 'excercise']
// //  todo.splice(2, 1)
// //  todo.push('buy coffee')
// //  todo.shift()
// //  console.log(`you have ${todos.length} todos!`)
// //  console.log(todos)

// // // console.log(toDoList[0])
// // // console.log(toDoList[3])
// // // showOnPage(toDoList[0])
// // // showOnPage(toDoList[3])

// // // forgot to use length to create a x todo list.
// // // console.log(`I have ${toDoList.length} things to do...`)
// // // showOnPage(`I have ${toDoList.length} things to do...`)
// // // andrews solution
// // // const todos = ['order cat food', 'clean kitchen', 'buy food', 'do work', 'excercise']

// // // console.log(`you have ${todos.length} todos!`)
// // // console.log(`todo: ${todo[0]}`)
// // // console.log(`todo: ${todo[todos.length - 2]}`)



// Video 43 
// 1. convert array into array of objects. --> text, completed.
// 2. create function to remove a todo by text value.

// const toDoList = ['Wake up', 'Eat Breakfast', 'Brush My Teeth', 'Take A Shower', 'Go Excercise']

const toDoList = [{
  task: 'Wake up',
  complete: true
}, {
  task: 'Eat Breakfast',
  complete: true
}, {
  task: 'Brush My Teeth',
  complete: true
}, {
  task: 'Take A Shower',
  complete: true
}, {
  task: 'Go Excercise',
  complete: true
}]

const deleteTodo = function (toDoList, Tasks) {
  const index = toDoList.findIndex(function (toDoList) {
    return toDoList.task.toLowerCase() === Tasks.toLowerCase()
  })
  if (index > -1) {
    toDoList.splice(index, 1)
  }
}

deleteTodo(toDoList, 'Go Excercise')

// console.log(toDoList)
showOnPage(toDoList)


// Andrews solution 

const todos = ['order cat food', 'clean kitchen', 'buy food', 'do work', 'excercise']

const todos = [{
  task: 'order cat food',
  complete: true
}, {
  task: 'clean kitchen',
  complete:false
}, {
  task: 'buy food',
  complete: true
}, {
  task: 'do work',
  complete: false
}, {
  task: 'excercise',
  complete: true
}]

const deleteTodo = function (todos, todoText) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase()
  })

  if (index > -1) {
    todos.splice(index, 1)
  }
}

deleteTodo(todos, 'buy food')

// console.log(todos)
showOnPage(todos)