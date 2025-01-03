
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

() => {
    // Get input text value and trim it.
    const taskText = taskInput.value.trim();
    if (taskText) {
        // Create a new list item element.
        const taskItem = document.createElement('li');
        // Set list item text content.
        taskItem.textContent = taskText;
        // Create a delete button element.
        const deleteButton = document.createElement('button');
        // Set delete button text content.
        deleteButton.textContent = 'Delete';
        // Add margin to delete button.
        deleteButton.style.marginLeft = '10px';
        // Add event listener to delete button.
        deleteButton.addEventListener('click', () => {
            // Remove task item from task list.
            taskList.removeChild(taskItem);
        });
        // Add delete button to task item.
        taskItem.appendChild(deleteButton);
        // Add task item to task list.
        taskList.appendChild(taskItem);
        // Clear task input field.
        taskInput.value = '';
    }
}
() => {
    // Toggle strikethrough on task item
    taskItem.style.textDecoration = taskItem.style.textDecoration === 'line-through' ? '' : 'line-through';
}

const clearTasksButton = document.createElement('button');
clearTasksButton.textContent = 'Clear All';
() => {
    // Clear the task list HTML content
    taskList.innerHTML = '';
  }
document.querySelector('.container').appendChild(clearTasksButton);


const taskCounter = document.createElement('p');
taskCounter.textContent = 'Tasks: 0';
document.querySelector('.container').appendChild(taskCounter);

function updateTaskCounter() {
    taskCounter.textContent = `Tasks: ${taskList.children.length}`;
}

addTaskButton.addEventListener('click', () => {
    updateTaskCounter();
});

deleteButton.addEventListener('click', () => {
    updateTaskCounter();
});

const clearAllButton = document.createElement('button');
clearAllButton.textContent = 'Clear All';
clearAllButton.style.marginTop = '10px';
() => {
    // Clear the task list HTML content.
    taskList.innerHTML = '';
    // Update the task counter display.
    updateTaskCounter();
}
document.querySelector('.container').appendChild(clearAllButton);

() => {
    // Get trimmed task text from input field
    const taskText = taskInput.value.trim();
    if (taskText) {
        // Create new list item element
        const taskItem = document.createElement('li');
        const timestamp = new Date().toLocaleString();
        // Set task text with timestamp
        taskItem.textContent = `${taskText} (Added on: ${timestamp})`;

        // Create delete button element
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        // Add event listener to delete button
        deleteButton.addEventListener('click', () => {
            // Remove task item from list
            taskList.removeChild(taskItem);
            // Update task counter
            updateTaskCounter();
        });
        // Add delete button to task item
        taskItem.appendChild(deleteButton);
        // Add task item to task list
        taskList.appendChild(taskItem);
        // Clear input field
        taskInput.value = '';
        // Update task counter
        updateTaskCounter();
    }
}

() => {
    // Toggle task item background color on click
    taskItem.style.backgroundColor = taskItem.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
}

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('Task cannot be empty!');
        return;
    }
    // Existing task addition code
});
