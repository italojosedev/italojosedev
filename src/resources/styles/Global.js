import { createGlobalStyle } from 'styled-components';

import  Fonts  from './Fonts';

const GlobalStyle = createGlobalStyle`
  ${Fonts.RobotoFont}
  ${Fonts.Pacifico}
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');
  body {
    font-family: 'Kanit', 'Roboto', sans-serif;
  }
  
`;

export default GlobalStyle;