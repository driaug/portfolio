import styled from "styled-components";
import { motion } from "framer-motion";

export const TimelineContainer = styled(motion.div)`
  background-color: #f3f4f6;
  padding: 5% 20%;
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  } ;
`;
