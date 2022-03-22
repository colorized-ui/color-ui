import React from "react";
import "./Stack.css";

export interface StackProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  borderRadius?: string;
  flexDirection?: string;
  flexWrap?: string;
  height: string;
  width: string;
}

const Stack = (props: StackProps) => {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height,
      }}
    ></div>
  );
};

export default Stack;
