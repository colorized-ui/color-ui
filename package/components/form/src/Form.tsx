import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface FormProps {
  label?: string;
}

const StyledForm = styled(motion.form)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  width: 400px;
`;

const Form = (props: FormProps) => {
  return <StyledForm>{props.label}</StyledForm>;
};

export default Form;
