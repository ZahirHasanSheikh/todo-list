
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