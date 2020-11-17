var formEl = document.querySelector("#task-form");
console.log(buttonEl);

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector(".task-list");
console.log(tasksToDoEl);
var createTaskHandler = function(event) {
    
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
  
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.classname = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class= 'task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    
    tasksToDoEl.appendChild(listItemEl);
  };
  
formEl.addEventListener("submit", createTaskHandler);
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);

