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
    <div className="center">
      <div className="card login-box">
        <h1 className="title">Login</h1>

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-green" onClick={handleLogin}>
          Login
        </button>

        {error && <p className="muted" style={{ color: "#ef4444" }}>{error}</p>}
      </div>
      </div>
    );
}

export default Login;
