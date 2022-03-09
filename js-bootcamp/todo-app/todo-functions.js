// fetch existing todos from local storage
// get savedtodos
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// save and rerender the todo list
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// toggle the completed value for a todo
const toggleTodo = function (id) {
    const todo = todos .find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }

}

// save todos to local storage
// save todos
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// render app todos based on filters
// render todos
const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });
  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });
  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));
  
  filteredTodos.forEach(function (todo) {
      document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })

  filteredTodos.forEach(function (todo) {
    generateTodoDOM(todo);
    document.querySelector("#todos").appendChild(summary);
  });
};

// get DOM elements for an individual note
// generate todo Dom
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkEl = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = todo.completed
    todoEl.appendChild(checkEl)

    checkEl.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    textEl.textContent = todo.text;
    todoEl.appendChild(textEl)
    
    button.textContent = 'X'
    todoEl.appendChild(button)
    button.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
};

// get DOM elements for list summary
// generate summaryDOM
const generateSummaryDOM = function (incompleteTodos) {
  summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};