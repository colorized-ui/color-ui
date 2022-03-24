import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface StackProps {
  label?: string;
}

const StyledDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: red;
  width: auto;
  height: auto;
`;

const Stack = (props: StackProps) => {
  return (
    <StyledDiv>
      {props.label}
      {props.label}
      {props.label}
      {props.label}
      {props.label}
      {props.label}
    </StyledDiv>
  );
};

export default Stack;
