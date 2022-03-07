import React, { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        console.warn(`name - ${name} not matched`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // this.props.onSignUp({ ...this.state });
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        EMAIL
        <input type="text" value={email} onChange={handleChange} name="email" />
      </label>
      <br />
      <label>
        PASSWORD
        <input
          type="text"
          value={password}
          onChange={handleChange}
          name="password"
        />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
}
