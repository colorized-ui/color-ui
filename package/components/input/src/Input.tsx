import React from "react";

export interface InputProps {
  label?: string;
}

const Input = (props: InputProps) => {
  return <input placeholder={props.label}></input>;
};

export default Input;
