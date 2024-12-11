const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

const li = document.createElement('li');
li.classList.add('task');

const span = document.createElement('span');
span.textContent = taskText;

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Elimina';
deleteButton.onclick = function () {
    taskList.removeChild(li);
}
li.onclick = function () {
  li.classList.toggle('completato');
}
li.appendChild(span);
li.appendChild(deleteButton);
taskList.appendChild(li)
taskInput.value = '';
}
addButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (event){
    if (event.key === 'enter') {
        addTask();
        
    }
});