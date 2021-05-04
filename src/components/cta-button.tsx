import styled from "styled-components";
import { motion } from "framer-motion";

export const CTAButton = styled(motion.button)`
  cursor: pointer;
  border: none;
  font-family: "Circular Std Medium", sans-serif;
  background-color: #6320ee;
  font-size: 1.2rem;
  margin-top: 5%;
  padding: 16px 32px;
  line-height: 1.2rem;
  border-radius: 24px;
  outline: none;
  color: #fff;
  box-shadow: 1px 2px 4px -2px #000;
`;
