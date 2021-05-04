import styled from "styled-components";
import { motion } from "framer-motion";

export const Project = styled(motion.div)`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 40px;
  z-index: 100;

  h2 {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
  }

  p {
    color: #888;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  a {
    color: #6320ee;
    margin-top: 5px;
    display: block;
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;
