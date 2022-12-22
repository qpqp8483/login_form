import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 5px 15px;
  color: #333;
  font-size: 14px;
  background: #fff;
  border: 1px solid #333;
  border-radius: 2px;
`;

const Button = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <Btn onClick={onClick} className={btnType}>
      {text}
    </Btn>
  );
};

Button.defaultProps = {
  type: "default",
};

export default Button;
