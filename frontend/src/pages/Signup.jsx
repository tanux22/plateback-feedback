import { useState } from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);

  const isValid =
    email && password && password === confirm && terms;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (data.success) window.location.href = "/";
  };

  return (
    <div className="signup_form">
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3 className="form-title">Create Account</h3>
          <p className="subtitle">Your space is waiting for you</p>
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
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          {password !== confirm && confirm && (
            <p style={{ color: "red" }}>Passwords do not match</p>
          )}
        </div>

                <div className="terms">
                    <input
                        type="checkbox"
                        id="terms"
                        checked={terms}
                        onChange={(e) => setTerms(e.target.checked)}
                    />
                    <label htmlFor="terms">
                        I agree to the{" "}
                        <Link to="/terms">Terms & Conditions</Link>
                    </label>
                </div>



        <button type="submit" disabled={!isValid}>
          Create account
        </button>

        <p className="sign_up">
          Already have an account? <a href="/">Log in</a>
        </p>
      </form>
    </div>
  );
}
