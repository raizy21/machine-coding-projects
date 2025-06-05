import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState(""); // current task input
  const [taskList, setTaskList] = useState([]); // list of tasks

  // function to handle task submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent form submission
    if (task) {
      // ensure the task is not empty
      setTaskList([...taskList, task]); // add the new task to the list
      setTask(""); // clear input field
    }
  };

  // function to delete a task
  const handleDelete = (id) => {
    const newList = taskList.filter((_, itemId) => itemId !== id); // remove the task from the list
    setTaskList(newList); // update task list
  };

  return (
    <>
      {/* task input form */}
      <form onSubmit={handleSubmit}>
        <label>task:</label>
        <input
          type="text"
          placeholder="enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)} // update task state
        />
        <button type="submit">add task</button>
      </form>

      {/* displaying the list of tasks */}
      <ul>
        {taskList.map((item, id) => (
          <li key={id}>
            {item}
            <button onClick={() => handleDelete(id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
