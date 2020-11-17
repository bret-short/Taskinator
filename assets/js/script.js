var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector(".task-list");
console.log(tasksToDoEl);
var createTaskHandler = function () {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task. ";
    tasksToDoEl.appendChild(listItemEl);
}
buttonEl.addEventListener("click", createTaskHandler);
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);

