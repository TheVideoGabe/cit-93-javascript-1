const todos = [{
    text: 'order cat food',
    completed: true
  }, {
    text: 'clean kitchen',
    completed:false
  }, {
    text: 'buy food',
    completed: true
  }, {
    text: 'do work',
    completed: false
  }, {
    text: 'excercise',
    completed: true
  }]

// print todos left.
// print p for every todo no order.

const todosLeft = todos.filter(function (list) {
    return list.completed = false
})

const everyTodo = document.createElement('h1')
everyTodo.textContent = `To Do's left = ${todosLeft.length}`
document.querySelector('body').appendChild(everyTodo)

todos.forEach(function (listOfItems) {
    const p = document.createElement('p')
    p.textContent = listOfItems.text
    document.querySelector('body').appendChild(p)
})

// Andrews solution

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
