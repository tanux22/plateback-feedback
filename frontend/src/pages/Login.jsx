import { useState } from "react";
import "../styles/style.css";
import {Link} from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3 className="form-title">Welcome Back</h3>
          <p className="subtitle">Please login to continue</p>
        </div>

        <div className="input_box">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />

        </div>

        <div className="input_box">
          <div className="password_title">
            <label>Password</label>
            <Link to ="/forgot">Forgot Password</Link>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />

        </div>

        <button type="submit">Log In</button>

        <p className="sign_up">
          Don&apos;t have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}
