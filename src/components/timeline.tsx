import styled from "styled-components";
import { motion } from "framer-motion";

export const Timeline = styled(motion.div)`
  margin-left: 5%;

  @media screen and (max-width: 576px) {
    margin-left: 0;
    h1 {
      font-size: 1.3rem;
      text-align: center;
    }
  }
`;
