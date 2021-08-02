import React, { useState } from "react";
import "../styles/login.css";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
      <form className="login__form">
        <h1>Login Here</h1>
        <input
          required
          type="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
