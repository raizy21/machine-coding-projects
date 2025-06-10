const TodoColumn = ({
  status,
  title,
  tasks,
  dragTask,
  handleDrag,
  handleOnDrop,
  onDragOver,
  editTaskId,
  editValue,
  handleDelete,
  handleEdit,
  handleSaveEdit,
  setEditValue,
  handleEditChange,
}) => {
  return (
    <div
      className="todo"
      data-status={status}
      onDrop={handleOnDrop}
      onDragOver={onDragOver}
    >
      <h2 className="todo-col">todo</h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <div
            key={task.id}
            draggable
            onDrag={(e) => handleDrag(e, task)}
            className="task-item"
          >
            {editTaskId === task.id ? (
              <input
                type="text"
                value={editValue}
                onChange={handleEditChange}
                onBlur={() => handleSaveEdit(task.id)}
                autoFocus
              />
            ) : (
              <p>{task.title}</p>
            )}
            <button onClick={() => handleEdit(task)}>edit</button>
            <button onClick={() => handleDelete(task.id)}>delete</button>
          </div>
        ))}
    </div>
  );
};

export default TodoColumn;
