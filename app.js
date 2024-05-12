const inputBox = document.getElementById('input-box');
const taskItems = document.getElementById("task-items");

function addTask() {
    if (inputBox.value === '') {
        alert("You have to enter something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskItems.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
}

inputBox.addEventListener("keypress", handleKeyPress);

taskItems.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", taskItems.innerHTML);
}

function showData() {
    taskItems.innerHTML = localStorage.getItem("data");
}

showData();
