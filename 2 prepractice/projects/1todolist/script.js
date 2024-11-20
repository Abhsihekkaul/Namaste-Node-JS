let Tasks = document.querySelector('.task-list');

document.querySelector('.btn-addTask').addEventListener('click', () => {
    // Get the input value
    let taskValue = document.querySelector('.addtask').value.trim();

    // Ensure the input is not empty
    if (taskValue === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create a new list item (li)
    let tempElement = document.createElement("li");
    tempElement.className = "task-item"; // Optional: Add a class to style the task
    tempElement.textContent = taskValue;

    // Create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        tempElement.remove(); // Remove the task when clicking the delete button
    });

    // Append the delete button to the list item
    tempElement.appendChild(deleteButton);

    // Append the new list item to the task list
    Tasks.appendChild(tempElement);

    // Clear the input field
    document.querySelector('.addtask').value = "";
});
