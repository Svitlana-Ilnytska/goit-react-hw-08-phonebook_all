import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

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
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        LOGIN
        <input type="text" value={name} onChange={handleChange} name="login" />
      </label>
      <br />
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
      <button type="submit">Sign Up</button>
    </form>
  );
}
