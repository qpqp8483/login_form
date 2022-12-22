import React, { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "./button";
import Input from "./input";

const Login = ({ setIsLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      // login
      data = await signInWithEmailAndPassword(auth, email, password);
      setIsLogin(true);
      sessionStorage.setItem("loginValue", auth.lastNotifiedUid);
      //router.push("/main");
    } catch (error) {
      alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      setEmail("");
      setPassword("");
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
        <Input
          name={"email"}
          type={"email"}
          placeholder={"Email"}
          required
          value={email}
          onChange={onChange}
        />
        <Input
          name={"password"}
          type={"password"}
          placeholder={"password"}
          required
          value={password}
          onChange={onChange}
        />
        <Button text={"로그인"} />
      </form>
    </div>
  );
};

export default Login;
