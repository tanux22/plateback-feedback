import { useState } from "react";
import "../styles/style.css";

export default function Forgot() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="login_form">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3 className="form-title">Forgot Password</h3>
          <p className="subtitle">
            Enter your email to receive a reset link
          </p>
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

        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}
