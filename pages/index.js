import { useEffect, useState } from "react";
import Link from "next/link";
import Login from "../components/login";
import Layout from "../components/layout";
import Main from "./main";

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
          // console.log("빈배열입니다.");
          setIsLogin(false);
        } else {
          // console.log(res[0].fbase_key);
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
    <Layout isLogin={isLogin}>
      {isLoading ? (
        <div>
          {isLogin ? <Main /> : <Login setIsLogin={setIsLogin} />}
          <Link href={"/components/join"} legacyBehavior>
            <a>회원가입</a>
          </Link>
        </div>
      ) : (
        <div>로딩중입니다.</div>
      )}
    </Layout>
  );
}
