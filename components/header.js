import React from "react";
import { auth } from "../firebase-config";

const Header = ({ isLogin }) => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <div>
      <div>header 입니다</div>
      <div>
        <div>{isLogin ? "로그인상태입니다." : "로그인상태가 아닙니다."}</div>
        <button onClick={logout}>로그아웃</button>
      </div>
    </div>
  );
};

export default Header;
