const todos = [
  {
    text: "order cat food",
    completed: true,
  },
  {
    text: "clean kitchen",
    completed: false,
  },
  {
    text: "buy food",
    completed: true,
  },
  {
    text: "do work",
    completed: false,
  },
  {
    text: "excercise",
    completed: true,
  },
];

const filters = {
  searchText: "",
  hideCompleted: false,
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

// 1. create a form with a single input for todo text
// 2. setup a submit handler and cancel the default action so we can respond
// 3. add a new item to the todos array with that text data (completed value of false) assume its ot completed because its being added
// 4. rerender app
// 5. clear input field

// document.querySelector('#new-form').addEventListener('submit', function (e) {
//   e.preventDefault()
//   todos.push(e.target.elements.todo.value, false)
//   renderTodos(todos, filters)
//   e.target.elements.todo.value = ''
// })

// Video 58 Andrews Solution
document.querySelector("#new-form").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todo.value,
    completed: false,
  });
  renderTodos(todos, filters);
  e.target.elements.todo.value = "";
});

// 1. create a checkbox and setup an event listener -> "hide completed"
// 2. create new hidecompleted filter with a default of false
// 3. update hidecompleted and rerender list on checkbox change
// 4. setup rerndertodos to remove completed items

document.querySelector("#hide-completed").addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });