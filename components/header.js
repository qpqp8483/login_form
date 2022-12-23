import React from "react";
import { auth } from "../firebase-config";
import styled from "styled-components";
import Button from "./button";
const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const Header = ({ isLogin, setIsLogin }) => {
  const logout = () => {
    auth.signOut();
    setIsLogin(false);
  };

  return (
    <HeaderBox>
      <div>{isLogin ? "로그인상태입니다." : "로그인상태가 아닙니다."}</div>
      {isLogin ? (
        <Button onClick={logout} text={"로그아웃"} type1={"negative"} />
      ) : (
        ""
      )}
    </HeaderBox>
  );
};

export default Header;
