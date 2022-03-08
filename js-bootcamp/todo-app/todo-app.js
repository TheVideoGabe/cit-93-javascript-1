// Chellenge Video 63
// Delete dummy data
// read and parse the data when the app starts up
// stringify and write the data when the new data is added


let todos = [];

let filters = {
  searchText: "",
  hideCompleted: false,
};

const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  
  filteredTodos = filteredTodos.filter(function (todo) {
    if (filters.hideCompleted) {
      return !todo.completed
    } else {
      return true
    }
  })

  const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
  });
  
  document.querySelector("#todos").innerHTML = "";
  
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')

    if (todo.text.length > 0) {
      p.textContent = todo.text
  } else {
      p.textContent = 'Unnamed Todo'
  }
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-form").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todo.value,
    completed: false,
  });
  localStorage.setItem('todos', JSON.stringify(todos))
  renderTodos(todos, filters);
});

document.querySelector("#hide-completed").addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters);
  });
