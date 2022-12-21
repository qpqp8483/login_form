import React, { useState } from "react";
import Header from "./header";

const Layout = ({ children, isLogin }) => {
  return (
    <div>
      <Header isLogin={isLogin} />
      {children}
    </div>
  );
};

export default Layout;
