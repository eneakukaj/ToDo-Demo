import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();

    const showErrorPopup = () => {
    setShowError(true);

    setTimeout(() => {
    setShowError(false);
  }, 2000);
};
    const handleLogin = () => {
        if(!email || !password){
            showErrorPopup();
            return;
        }

        if (email === "intern@test.com" && password ==="123456"){
            localStorage.setItem("isLoggedIn", "true");
            navigate("/todo");
        }else {
            showErrorPopup();
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
      </div>
      
      {showError && (
        <div className="popup-error">
          Invalid credentials
        </div>
      )}
      </div>
    );
}

export default Login;
