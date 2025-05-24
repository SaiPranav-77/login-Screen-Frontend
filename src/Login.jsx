import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5005/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const user = await response.json();

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("currentUser", user.firstName);
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ width: "25rem" }}>
        <h3 className="text-center mb-4">Login</h3>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-1"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom:"15px" }}>
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <button className="btn btn-primary w-100 mb-2" onClick={handleLogin}>
          Login
        </button>
        <div className="text-center">
          <Link to="/register">Don't have an account? Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
