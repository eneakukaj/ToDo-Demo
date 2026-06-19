import { useState } from "react";

function TodoItem({ task, toggleDone, deleteTask, editTask }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(task.title);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="item">
      {edit ? (
        <>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="actions">
            <button
              className="btn btn-green"
              onClick={() => {
                editTask(task.id, text);
                setEdit(false);
              }}
            >
              Save
            </button>

            <button className="btn btn-gray" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </div>
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

          <div className="actions">
            <button
              className="btn btn-gray"
              onClick={() => toggleDone(task.id)}
            >
              {task.done ? "Undo" : "Done"}
            </button>

            <button className="btn btn-gray" onClick={() => setEdit(true)}>
              Edit
            </button>

            <button
              className="btn btn-red"
              onClick={() => setConfirmDelete(true)}
            >
              Delete
            </button>
          </div>
        </>
      )}

      {confirmDelete && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Delete Task</h3>
            <p>Are you sure?</p>

            <div className="modal-actions">
              <button
                className="btn btn-red"
                onClick={() => {
                  deleteTask(task.id);
                  setConfirmDelete(false);
                }}
              >
                Delete
              </button>

              <button
                className="btn btn-gray"
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;