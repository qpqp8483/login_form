import { useEffect, useState } from "react";
import Link from "next/link";
import Login from "../components/login";
import Layout from "../components/layout";
import Main from "./main";
import styled from "styled-components";

const LoginBox = styled.div`
  margin: auto;
  padding: 15px;
  width: 500px;
  min-height: 280px;
  border: 1px solid #333;
  border-radius: 5px;
`;

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectAllIndexDB = () => {
    let request = window.indexedDB.open("firebaseLocalStorageDb", 1);

    request.onerror = function (event) {
      console.log("실패");
    };
    request.onsuccess = function (event) {
      let db = event.target.result;
      let transaction = db.transaction(["firebaseLocalStorage"]);
      let objectStore = transaction.objectStore("firebaseLocalStorage");
      let request = objectStore.getAll();
      request.onsuccess = () => {
        const res = request.result;
        if (res.length === 0) {
          setIsLogin(false);
        } else {
          setIsLogin(true);
        }
        setIsLoading(true);
      };
    };
  };

  useEffect(() => {
    selectAllIndexDB();
  }, []);

  return (
    <Layout isLogin={isLogin} setIsLogin={setIsLogin}>
      {isLoading ? (
        <LoginBox>
          {isLogin ? (
            <Main />
          ) : (
            <div>
              <Login setIsLogin={setIsLogin} />
              <Link href={"/components/join"} legacyBehavior>
                <a>회원가입</a>
              </Link>
            </div>
          )}
        </LoginBox>
      ) : (
        <div>로딩중입니다.</div>
      )}
    </Layout>
  );
}
