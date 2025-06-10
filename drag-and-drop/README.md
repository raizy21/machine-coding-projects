# drag and drop

this task manager allows users to create, edit, and delete tasks, while easily moving them between different status columns (todo, doing, done) using drag-and-drop functionality.

1. Main component:

   - the drag and drop component is the central part of the application.
   - It manages the overall state of the tasks and handles user interactions.

Here’s a breakdown of its key features:

state management:

- value: stores the input value for adding new tasks. - tasks: an array of task objects, where each task has a title, status, and unique id. - dragTask: keeps track of the task being dragged. - editTaskId: stores the id of the task currently being edited. - editValue: holds the value of the task while it is being edited.

adding tasks:

- users can add tasks by typing in the input field and pressing the enter key. - each new task is assigned a status of "todo" by default.

drag and drop functionality:

- when a task is dragged, the handleDrag function captures the dragged task. - the handleOnDrop function updates the task's status when it is dropped into a new column.

editing and deleting tasks: - users can edit a task by clicking the "edit" button, which switches the task display to an input field. - the task can be deleted using the "delete" button.

2.  task columns

- the task columns (to do column, doing column, done column) represent different stages of task completion.
- each column receives the same set of props to maintain consistency across the application:
- displaying tasks:
  - each column filters the tasks array to display only those tasks that match its status.
  - this allows for a clear view of tasks at different stages.
  - drag and frop: rach column can accept dropped tasks, and the onDragOver event prevents default behavior to allow dropping.
- editing and deleting:

  - similar to the main component, each column supports task editing and deletion through the same handler functions passed as props.
