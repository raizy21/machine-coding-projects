# Todo List

This todo list component is a simple application built with React that allows users to add and delete tasks. Below is a breakdown of how it works:

1. **State Management**

   - `useState` is used to manage two pieces of state:
     - **`task`**: holds the current input value for the new task
     - **`taskList`**: an array that stores the list of tasks

2. **Adding Tasks**

   - The `handleSubmit` function is triggered when the form is submitted.
   - It prevents the default form submission behavior and checks if the `task` input is not empty.
   - If valid, it adds the new task to `taskList` using `setTaskList` and then clears the input field by setting `task` back to an empty string.

3. **Deleting Tasks**

   - The `handleDelete` function takes an `id` (index) of the task to be deleted.
   - It filters out the task from `taskList` and updates the state with the new list using `setTaskList`.

4. **Rendering the Component**
   - The component renders a form for task input, which includes a text field and a button to add tasks.
   - Below the form, it displays the list of tasks using an unordered list (`<ul>`).
   - Each task is displayed as a list item (`<li>`) with a corresponding “Delete” button, allowing users to remove tasks from the list.

---

> **Note:** This component provides a clean and intuitive interface for managing a simple to-do list, focusing on core functionality without any additional complexities.
