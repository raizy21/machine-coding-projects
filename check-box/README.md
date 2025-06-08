# check box

this component demonstrates how to display a list of tasks fetched from an api, with a "select all" option to mark all tasks as completed or incomplete.

1. api call:

   - the component uses the useEffect hook to call the api (jsonplaceholder.typicode.com) when it first loads.
   - it fetches 10 tasks and stores them in the list state.

2. select all functionality:

   - the "select all" checkbox allows the user to toggle the completion status of all tasks at once.
   - this is handled by the handleSelectAll function, which updates both the selectAll state and the list state by marking all tasks as completed or incomplete.

3. individual task selection:

- each task in the list has its own checkbox.
- users can toggle the completion status of individual tasks using the handleCheck function.
- it checks the id of the task and toggles its completed state.
