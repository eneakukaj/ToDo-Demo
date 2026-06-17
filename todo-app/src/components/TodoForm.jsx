import { useState } from "react";

function TodoForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) {
      setError("Task cannot be empty");
      return;
    }

    addTask(title);

    setTitle("");
    setError("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={handleSubmit}>Add</button>

      {error && <p>{error}</p>}
    </div>
  );
}

export default TodoForm;