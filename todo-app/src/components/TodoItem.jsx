import { useState } from "react";

function TodoItem({ task, toggleDone, deleteTask, editTask }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.title);

  return (
    <div className="item">
      {edit ? (
        <>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-green"
            onClick={() => {
              editTask(task.id, text);
              setEdit(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            {task.title}
          </span>

          <div>
            <button className="btn btn-gray" onClick={() => toggleDone(task.id)}>
              {task.done ? "Undo" : "Done"}
            </button>

            <button className="btn btn-gray" onClick={() => setEdit(true)}>
              Edit
            </button>

            <button className="btn btn-red" onClick={() => deleteTask(task.id)}>
              X
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;