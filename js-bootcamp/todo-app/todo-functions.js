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
// save todods
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// render app todos based on filters
// render todos
const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
  });
  document.querySelector("#todos").innerHTML = "";
  filteredTodos = filteredTodos.filter(function (todo) {
    if (filters.hideCompleted) {
      return !todo.completed;
    } else {
      return true;
    }
  });

  filteredTodos.forEach(function (todo) {
    generateTodoDOM(todo)
  });
}
// get DOM elements for an individual note
// generate todo Dom
const generateTodoDOM = function (todo) {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("#todos").appendChild(p);
  return p
};
// get DOM elements for list summary
// generate summaryDOM
const summaryDom = function () {
 summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);
}