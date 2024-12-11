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
    span.addEventListener('click', function(e){
     //span.style.textDecoration = 'lineThrough'
      // console.log(e.target) 
       e.target.style.textDecoration = 'line-through'
       e.target.style.color = 'red'
    })

    const deleteButton = document.createElement('button');

    deleteButton.style.float = 'right'
    deleteButton.textContent = 'Elimina';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    })  
    

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li)
    taskInput.value = '';
}
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event){
    if (event.key === 'Enter') {
        addTask(); 
    }
});