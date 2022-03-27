// fetch existing todos from local storage
// get savedtodos
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
};


// save and rerender the todo list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// toggle the completed value for a todo
const toggleTodo = (id) => {
    const todo = todos .find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }

}

// save todos to local storage
// save todos
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// render app todos based on filters
// render todos
const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });
  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));
  
  filteredTodos.forEach((todo) => {
      document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })

  filteredTodos.forEach((todo) => {
    generateTodoDOM(todo);
    document.querySelector("#todos").appendChild(summary);
  });
};

// get DOM elements for an individual note
// generate todo Dom
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkEl = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    checkEl.setAttribute('type', 'checkbox')
    checkEl.checked = todo.completed
    todoEl.appendChild(checkEl)

    checkEl.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    textEl.textContent = todo.text;
    todoEl.appendChild(textEl)
    
    button.textContent = 'X'
    todoEl.appendChild(button)
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
};

// get DOM elements for list summary
// generate summaryDOM
const generateSummaryDOM = (incompleteTodos) => {
  summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};