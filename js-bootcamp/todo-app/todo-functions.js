// Andrews solution video 65

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

// save todos to local storage
// save todos
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// render app todos based on filters
// render todos
// fixed mistakes
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

// setup root div
// setup and append checkbox (set type attribute)
// setup and append a span (set text)
// setup and append a button (set text)



// get DOM elements for an individual note
// generate todo Dom
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkEl = document.createElement('input')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    checkEl.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkEl)
    
    textEl.textContent = todo.text;
    todoEl.appendChild(textEl)
    
    button.textContent = 'X'
    todoEl.appendChild(button)

        
    return todoEl
};



// get DOM elements for list summary
// generate summaryDOM
const generateSummaryDOM = function (incompleteTodos) {
  summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};