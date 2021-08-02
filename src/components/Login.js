import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userSlice";
import "../styles/login.css";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggeIn: true,
      })
    );
  };
  return (
    <div className="login">
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
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
