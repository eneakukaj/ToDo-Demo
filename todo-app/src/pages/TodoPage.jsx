import { useNavigate } from "react-router-dom";

function TodoPage(){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <div>
            <h1>To-Do Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default TodoPage;