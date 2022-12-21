import React, { useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const Join = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      // join
      data = await createUserWithEmailAndPassword(auth, email, password);
      console.log(data);
      router.push("/");
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
        <input type="submit" value="Join" />
      </form>
    </div>
  );
};

export default Join;
