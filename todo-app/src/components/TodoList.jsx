import TodoItem from "./TodoItem";

function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TodoList;