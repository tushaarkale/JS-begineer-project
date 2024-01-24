const inputBox = document.querySelector('.input-box');
const taskContainer = document.querySelector('.task-container');
const button = document.querySelector('.clear');

const addTask = () => {
    if(inputBox.value === '') {
        alert(`Hey! you forgot to add task 😅`);
    }
    else {
        let taskList = document.createElement('li');
        taskList.innerHTML = inputBox.value;
        taskContainer.appendChild(taskList);

        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        taskList.appendChild(span)
    }
    inputBox.value = '';
    saveTaskList();
}

taskContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTaskList();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTaskList();
    }
}, false)

function saveTaskList() {
    localStorage.setItem('data', taskContainer.innerHTML);
}
function showTaskList() {
    taskContainer.innerHTML = localStorage.getItem('data');
}

showTaskList();

button.addEventListener('click', () => {
    localStorage.clear();
    taskContainer.innerHTML = '';
})
