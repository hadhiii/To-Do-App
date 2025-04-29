var tasks = [];

document.getElementById("hadhi").addEventListener("click", function () {
  tasks.push(document.getElementById("wowww").value);
  displayArray();
});

function displayArray() {
  var tasksdiv = document.getElementById("tasks");
  var taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "task");
  var taskCheckbox = document.createElement("input");
  taskCheckbox.setAttribute("type", "checkbox");
  var taskLabel = document.createElement("label");
  tasks.forEach(function (t) {
    tasksdiv.appendChild(taskDiv);
    taskDiv.appendChild(taskCheckbox);
    taskDiv.appendChild(taskLabel);
    taskLabel.textContent = t;
  });
}
