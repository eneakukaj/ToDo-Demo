import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TodoPage(){
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    const addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title: title,
            done: false,
        };

        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>To-Do Page</h1>
            <button onClick={handleLogout}>Logout</button>
            
            <TodoForm addTask={addTask} />
            <p>Total Tasks: {tasks.length}</p>
            <TodoList tasks={tasks} />
            
        </div>
    );
}
export default TodoPage;