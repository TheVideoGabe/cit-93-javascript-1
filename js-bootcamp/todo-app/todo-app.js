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

// 1. setup div for todos
//2. setup filters and wire up a new filter input to change it.
// 3. create a renderTodods function to render and rerender the latest filtered data

// Video 57 challenge starts here
const filters = {
  textSearch: ''
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
      return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (todo) {
      const p = document.createElement('p')
      p.textContent = todo.text
      document.querySelector('#todos').appendChild(p)
    })
  }
  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })
  // Video 57 Challenge ends here.

renderTodos(todos, filters)

document.querySelector('button').addEventListener('click', function (e) {
    console.log('Add a new todo... ')
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})