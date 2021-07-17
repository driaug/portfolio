import styled from "styled-components";
import { motion } from "framer-motion";

export const IntroductionContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  
  margin-bottom: 10px;

  div {
    margin-left: 10%;
    
    h1 {
      font-size: 1.4rem;
    }

    p {
      margin-top: 10px;
      color: #888;
      font-size: 0.9rem;
      line-height: 1.3rem;
    }
    
    span {
      cursor: pointer;
      color: #3B82F6
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
