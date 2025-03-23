let input = document.querySelector('.input');
let button = document.querySelector('.add');
let tasks = document.querySelector('.tasks');

button.onclick = function() {
    let taskText = input.value.trim();
    if (taskText === "") return;
    input.value = "";
    addTask(taskText);
};

function addTask(task) {
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');  // إضافة كلاس للتحكم في التصميم

    let taskSpan = document.createElement('span');
    taskSpan.textContent = task;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        taskDiv.remove();
    };

    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteBtn);
    tasks.appendChild(taskDiv);
}
