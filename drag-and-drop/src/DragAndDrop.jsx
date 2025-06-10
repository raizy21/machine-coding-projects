import { useState } from "react";
import TodoColumn from "./TodoColumn.jsx";
import DoingColumn from "./DoingColumn.jsx";
import DoneColumn from "./DoneColumn.jsx";

const DragAndDrop = () => {
  const TODO = "todo";
  const DOING = "doing";
  const DONE = "done";

  const [value, setValue] = useState(""); //useState for input field value
  const [tasks, setTasks] = useState([]); //useState for tasks array
  const [dragTask, setDragTask] = useState(null); //useState for the task being dragged
  const [editTaskId, setEditTaskId] = useState(null); //useState for the task being edited
  const [editValue, setEditValue] = useState(""); //useState for the edited task value

  // handle change for input field
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // handle task addition
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && value.trim() !== "") {
      const newTask = {
        title: value,
        status: TODO,
        id: Date.now(),
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setValue("");
    }
  };

  // handle drag and drop to change task status
  const handleDragNDrop = (status) => {
    let updatedTasks = tasks.map((task) => {
      if (dragTask.id === task.id) {
        task.status = status;
      }
      return task;
    });
    setTasks(updatedTasks);
    setDragTask(null);
  };

  // handle drag event
  const handleDrag = (e, task) => {
    setDragTask(task);
  };

  // handle drop event
  const handleOnDrop = (e) => {
    const status = e.target.getAttribute("data-status");
    handleDragNDrop(status);
  };

  // prevent default behavior for drag over event
  const OnDragOver = (e) => {
    e.preventDefault();
  };

  // handle task deletion
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // handle task editing
  const handleEdit = (task) => {
    setEditTaskId(task.id);
    setEditValue(task.title);
  };

  // handle change in the edit input field
  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  // save edited task
  const handleSaveEdit = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.title = editValue;
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTaskId(null); // exit edit mode
  };

  return (
    <>
      <h1>task manager</h1>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        onKeyDown={handleKeyDown}
        placeholder="add a new task"
      />

      <div className="board">
        {/* to do section */}
        <TodoColumn
          status={TODO}
          title="todo"
          tasks={tasks}
          dragTask={dragTask}
          handleDrag={handleDrag}
          handleOnDrop={handleOnDrop}
          onDragOver={OnDragOver}
          editTaskId={editTaskId}
          editValue={editValue}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSaveEdit={handleSaveEdit}
          setEditValue={setEditValue}
          handleEditChange={handleEditChange}
        />

        {/* doing section */}

        <DoingColumn
          status={DOING}
          title="doing"
          tasks={tasks}
          dragTask={dragTask}
          handleDrag={handleDrag}
          handleOnDrop={handleOnDrop}
          onDragOver={OnDragOver}
          editTaskId={editTaskId}
          editValue={editValue}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSaveEdit={handleSaveEdit}
          setEditValue={setEditValue}
          handleEditChange={handleEditChange}
        />

        {/* done section */}
        <DoneColumn
          status={DONE}
          title="done"
          tasks={tasks}
          dragTask={dragTask}
          handleDrag={handleDrag}
          handleOnDrop={handleOnDrop}
          onDragOver={OnDragOver}
          editTaskId={editTaskId}
          editValue={editValue}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSaveEdit={handleSaveEdit}
          setEditValue={setEditValue}
          handleEditChange={handleEditChange}
        />
      </div>
    </>
  );
};

export default DragAndDrop;
