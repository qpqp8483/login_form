import { useState } from "react";
import styles from "../styles/Home.module.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config";
import Login from "./components/login";
import Link from "next/link";
export default function Home() {
  const [newAccount, setNewAccount] = useState(true); // 새로운 유저인지 확인(초기값: true)
  const [isLogin, setIsLogin] = useState(false);

  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div className={styles.container}>
      <Login setIsLogin={setIsLogin} />
      <Link href={"/components/join"} legacyBehavior>
        <a>회원가입</a>
      </Link>
      <br />
      <span onClick={toggleAccount}>
        {newAccount ? "Login" : "Create Account"}
      </span>
      <div>{isLogin ? "로그인상태입니다." : "로그인상태가 아닙니다."}</div>
    </div>
  );
}
