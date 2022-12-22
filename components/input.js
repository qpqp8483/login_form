import React from "react";
import styled from "styled-components";

const InputItem = styled.input`
  width: 100%;
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
