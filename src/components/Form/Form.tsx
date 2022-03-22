import React from "react";
import { Primary } from "../../stories/Input.stories";

export interface FormProps {
  backgroundColor: string;
  label: string;
  sizes?: ["sm", "md", "lg", "xl"];
  padding?: string;
  margin?: string;
  width: string;
  height: string;
  placeholder?: string;
}

const paddingSizes = {
  sm: "3px",
  md: "8px",
  lg: "12px",
  xl: "17px",
};

const Form = (props: FormProps) => {
  return (
    <>
      <form
        style={{
          backgroundColor: props.backgroundColor,
          height: props.height || "auto",
          width: props.width || "auto",
          padding: props.padding,
        }}
      >
        <label htmlFor={`${props.label}`} placeholder={props.label}>
          {props.label}
        </label>
        <Primary placeholder="asd" />
      </form>
    </>
  );
};

export default Form;
