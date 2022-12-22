import React from "react";
import Header from "./header";
import styled from "styled-components";

const WrapBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Layout = ({ children, isLogin, setIsLogin }) => {
  return (
    <WrapBox>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      {children}
    </WrapBox>
  );
};

export default Layout;
