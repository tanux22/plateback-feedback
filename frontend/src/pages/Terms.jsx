import "../styles/style.css";

export default function Terms() {
  return (
    <div className="login_form">
      <div className="form-header">
        <h3 className="form-title">Terms & Conditions</h3>
        <p className="subtitle">Please read carefully</p>
      </div>

      <div style={{ fontSize: "14.5px", color: "#374151", lineHeight: "1.8" }}>
        <p>
          By creating an account, you agree to our terms and conditions.
          You are responsible for maintaining the confidentiality of your
          account and password.
        </p>
        <br />
        <p>
          We reserve the right to suspend or terminate accounts that violate
          our policies.
        </p>
      </div>
    </div>
  );
}
