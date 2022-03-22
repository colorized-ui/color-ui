import React, { useState } from "react";
import "./input.css";

export interface InputProps {
  placeholder?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const Input = (props: InputProps) => {
  const [value, setValue] = useState("");

  console.log(value);

  return (
    <input
      placeholder={`${props.placeholder} `}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
      }}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default Input;
