import { useState } from "react";

function TodoForm({ addTask }) {
  const [title, setTitle] = useState("");

  return (
    <div className="form-wrapper">
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add task..."
      />

      <button
        className="btn btn-green"
        onClick={() => {
          if (!title.trim()) return;
          addTask(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoForm;