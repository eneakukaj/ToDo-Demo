import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleDone, deleteTask, editTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TodoList;