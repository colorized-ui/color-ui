import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface ButtonProps {
  loading?: boolean;

  error?: boolean;

  label?: string;

  icon?: React.ReactElement;
}

const StyledButton = styled(motion.button)`
  width: 180px;
  height: 60px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.label}</StyledButton>;
};

export default Button;
