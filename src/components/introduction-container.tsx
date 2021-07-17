import styled from "styled-components";
import { motion } from "framer-motion";

export const IntroductionContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  
  margin-bottom: 10px;

  div {
    margin-left: 10%;
    
    h1 {
      font-size: 1.3rem;
    }

    p {
      margin-top: 10px;
      color: #888;
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }


  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 10px;
    flex-direction: column;
    text-align: center;

    div {
      margin-top: 10px;
      margin-left: 0;
    }
  } ;
`;
