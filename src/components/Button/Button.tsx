import React from "react";
import { motion } from "framer-motion";
import "./Button.css";

export interface ButtonProps {
  label: string;
  backgroundColor: string;
  color?: string;
  width?: string;
  height?: string;
  isGradient?: {
    direction: string;
    colors: string;
  };
}

const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: props.height,
        background: `linear-gradient(to ${
          props.isGradient?.direction || `left`
        },${props.isGradient?.colors})`,
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;
