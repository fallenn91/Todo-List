const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


const li = document.createElement("li");

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

checkbox.addEventListener("click", function() {
    li.classList.toggle("completed", checkbox.checked);
    //add function below
    updateCounters();
});

editBtn.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
        //add the code below
        checkbox.checked = false;
        updateCounters();
    }
});

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down a task");
        return;
    }

    li.innerHTML = `
        <label>
            <input type = "checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";
}

function updateCounters() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}

deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
        li.remove();
        updateCounters();
    }
});


