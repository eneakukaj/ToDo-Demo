import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        if(!email || !password){
            setError("Please fill out all fields");
            return;
        }

        if (email === "intern@test.com" && password ==="123456"){
            localStorage.setItem("isLoggedIn", "true");
            navigate("/todo");
        }else {
            setError("Invalid credentials");
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>

            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    );
}

export default Login;
