const todos = JSON.parse(localStorage.getItem("todos")) || [];
const btnAdd = document.querySelector("#btn-add");
const ul = document.querySelector("#todo-list");
const filter = document.querySelector("#filter");
const all = document.querySelector("#all");
const open = document.querySelector("#open");
const done = document.querySelector("#done");
const remove = document.querySelector("#btn-remove");
let counter = JSON.parse(localStorage.getItem("counter")) || 0;
let filtername = "all";
renderTodos();
btnAdd.addEventListener("click", addTodo);
filter.addEventListener("change", changeFilter);
remove.addEventListener("click", removeDoneToDoes);

function addTodo(event) {
  event.preventDefault();
  const inputText = document.querySelector("#input");
  for (let todo of todos) {
    if (inputText.value.trim() === "") {
      inputText.value = "";
      return;
    }
    if (inputText.value.toUpperCase() === todo.description.toUpperCase()) {
      console.log("error");
      inputText.value = "";
      inputText.placeholder = "idiot das hast du schon";
      return;
    }
  }
  counter++;

  todos.push({ description: inputText.value, done: false, id: counter });
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("counter", JSON.stringify(counter));
  renderTodos();
  inputText.value = "";
}
function renderTodos(event) {
  ul.innerText = "";
  todos.forEach((element) => {
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = element.done;
    check.todo = element;
    const newli = document.createElement("li");
    newli.id = element.id;
    const txt = document.createTextNode(element.description);
    if (element.done) {
      newli.style = "text-decoration:line-through;";
    }
    newli.append(txt, check);
    ul.appendChild(newli);

    check.addEventListener("change", updateTodos);

    if (filtername === "all") {
      newli.hidden = false;
    } else if (filtername === "open") {
      newli.hidden = element.done;
    } else {
      newli.hidden = !element.done;
    }
  });
}
function updateTodos(event) {
  if (!event.target.checked) {
    event.target.todo.done = false;
    event.target.parentElement.style = "text-decoration:none;";
  } else {
    event.target.todo.done = true;
    event.target.parentElement.style = "text-decoration:line-through;";
  }
  localStorage.setItem("todos", JSON.stringify(todos));
}

function changeFilter(event) {
  if (event.target === all) {
    open.checked = false;
    done.checked = false;
    filtername = "all";
  }
  if (event.target === open) {
    all.checked = false;
    done.checked = false;
    filtername = "open";
  }
  if (event.target === done) {
    open.checked = false;
    all.checked = false;
    filtername = "done";
  }
  renderTodos();
}

function removeDoneToDoes() {
  const items = todos.length;
  for (let i = items - 1; i >= 0; i--) {
    if (todos[i].done === true) {
      todos.splice(i, 1);
    }
  }
  renderTodos();
  localStorage.setItem("todos", JSON.stringify(todos));
}
