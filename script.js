console.log("Hello, World!");

let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("add-btn");
let taskList = document.getElementById("taskList");

let tasks = [];

function renderList() {
    taskList.innerHTML = ""; // Clear the list before re-rendering
    tasks.forEach((task, index) => {
        let listItem = document.createElement("li");
        let taskText = document.createElement("span");
        taskText.innerText = task;
        let button = document.createElement("button");
        button.innerText = "Delete";
        button.classList.add("delete");
        button.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderList();
        });

        listItem.appendChild(taskText);
        listItem.appendChild(button);

        taskList.appendChild(listItem);
    });
}

function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);
    taskInput.value = "";
    taskInput.focus();
    renderList();
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});