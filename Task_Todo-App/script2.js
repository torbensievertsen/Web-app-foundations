const todoList = document.querySelector("#todo-list");
const addTodoBtn = document.querySelector("#btn-add");
const addTodo = document.querySelector("#input");
const todos = [
  { description: "learn html", done: false },
  { description: "learn css", done: true },
];

renderTodoList();

function renderTodoList() {
  for (const currentTodo of todos) {
    const newLiEl = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = currentTodo.done;
    checkbox.todo = currentTodo;

    const label = document.createElement("label");
    label.textContent = currentTodo.description;

    newLiEl.appendChild(label);
    newLiEl.appendChild(checkbox);
    todoList.appendChild(newLiEl);
  }
}
function addObj(event) {
  event.preventDefault();
  const newTodo = {};
  newTodo.description = addTodo.value;
  newTodo.done = false;
  todos.push(newTodo);
  renderTodoList();
}

addTodoBtn.addEventListener("click", addObj);
