import React from "react";
import styled from "styled-components";

const InputItem = styled.input`
  padding-left: 15px;
  width: 100%;
  height: 45px;
  background: #fff;
  border: 1px solid #a0a4a7;
  -webkit-box-shadow: 0 0 0 30px white inset !important;
  margin-bottom: 18px;
`;

const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <InputItem
      name={name}
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
