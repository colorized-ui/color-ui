import React from "react";
import Stack from "../Containers/Stack";
import "./ColorProvider.css";

export interface ProviderProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

const ColorProvider = (props: ProviderProps) => {
  return (
    <div
      style={{
        margin: "0px",
        height: "100%",
        backgroundColor: props.backgroundColor,
      }}
    >
      <Stack height={"600px"} width={"300px"}>
        asdsa
      </Stack>
    </div>
  );
};

export default ColorProvider;
