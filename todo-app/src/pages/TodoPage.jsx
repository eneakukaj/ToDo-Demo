import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoPage() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, done: false }]);
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      )
    );
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="center">
      <div className="card todo-card">

        <h1 className="title">To-Do</h1>

        <TodoForm addTask={addTask} />

        <div className="filters">
          <button
            className={`btn filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`btn filter-btn ${filter === "active" ? "active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>

          <button
            className={`btn filter-btn ${filter === "done" ? "active" : ""}`}
            onClick={() => setFilter("done")}
          >
            Done
          </button>
        </div>

        <p className="muted">
          Total: {tasks.length} | Completed:{" "}
          {tasks.filter((t) => t.done).length}
        </p>

        <TodoList
          tasks={filteredTasks}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
          editTask={editTask}
        />

        <div className="logout-wrapper">
          <button className="btn btn-red" onClick={logout}>
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default TodoPage;