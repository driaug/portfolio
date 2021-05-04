import styled from "styled-components";
import { motion } from "framer-motion";

export const Headshot = styled(motion.img)`
  border-radius: 12px;
  width: 100%;

  @media screen and (max-width: 576px) {
    width: 140px;
    align-self: center;
  }
`;
