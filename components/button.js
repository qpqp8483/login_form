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

const Button = ({ text, type1, type2, onClick }) => {
  const btnType = ["positive_min", "negative_min"].includes(type1)
    ? type1
    : "default_min";
  const btnType2 = ["positive_full", "negative_full"].includes(type2)
    ? type2
    : "default_full";

  return (
    <Btn onClick={onClick} className={type1 != null ? btnType : btnType2}>
      {text}
    </Btn>
  );
};

Button.defaultProps = {
  type1: "default_min",
  type2: "default_full",
};

export default Button;
