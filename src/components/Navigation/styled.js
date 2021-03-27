
//import { motion } from "framer-motion";
import styled from "styled-components";
import Colors from '../../resources/Colors'
// import Fonts from '../../resources/styles/Fonts'

export const Background = styled.div`
  background: ${Colors.background.main};
  margin:0;
  width:100vw ;
  height:  100vh;
  overflow: hidden;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  
`;

export const Body = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
  color: #707070;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top:0;
  left: 75px;
  p {
    font-family: 'Chango', cursive;
    font-size: 25px;
  }
`;

export const Main = styled.div`
  width: calc(100vw - 75px);
  overflow-y: auto;
  overflow-x: none;
  padding-top: 25px;padding-left: 100px;
  
`
