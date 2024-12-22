document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (!taskText) {
            alert('Please enter a task!');
            return;
        }

        addTask(taskText);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-buttons">
                <button class="edit">Edit</button>
                <button class="strike-through">Complete</button>
            </div>
        `;
        taskList.appendChild(li);

        const editButton = li.querySelector('.edit');
        const strikeThroughButton = li.querySelector('.strike-through');

        editButton.addEventListener('click', () => editTask(li));
        strikeThroughButton.addEventListener('click', () => toggleStrikeThrough(li));
    }

    function editTask(li) {
        const taskTextElement = li.querySelector('.task-text');
        const newTaskText = prompt('Edit your task:', taskTextElement.textContent);

        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskTextElement.textContent = newTaskText.trim();
        } else {
            alert('Task cannot be empty!');
        }
    }

    function toggleStrikeThrough(li) {
        const taskTextElement = li.querySelector('.task-text');
        taskTextElement.classList.toggle('strikethrough');
    }
});
