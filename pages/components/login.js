import React, { useState } from "react";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      // login
      data = await signInWithEmailAndPassword(auth, email, password);
      setIsLogin(true);
      console.log(data);
    } catch (error) {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      setEmail("");
      setPassword("");
      console.log(error);
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
