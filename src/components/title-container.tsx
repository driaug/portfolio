import styled from "styled-components";
import { motion } from "framer-motion";

export const TitleContainer = styled(motion.div)`
  margin-left: 20%;
  margin-top: auto;

  @media screen and (max-width: 576px) {
    margin-left: 5%;
  } ;
`;
