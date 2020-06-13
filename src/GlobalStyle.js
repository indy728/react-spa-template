import { createGlobalStyle } from 'styled-components';
import { device } from 'themes/media';

const GlobalStyle = createGlobalStyle`
  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(75%); }
    100% {
      opacity: 1;
      transform: translate(0); } 
  }

  * { 
    margin: 0;
    padding: 0;
  }

  @keyframes moveInTop {
    0% {
      opacity: 0;
      transform: translateY(-75%); }
    85% {
      transform: translateY(15%);}
    100% {
      opacity: 1;
      transform: translate(0); } 
  }

  * { 
    margin: 0;
    padding: 0;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    -moz-box-sizing: inherit; 
    -webkit-box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 50%;

    @media ${device.md} {
      font-size: 62.5%; 
    }

    @media ${device.xl} {
      font-size: 75%; 
    }
  }

  body {
    background-image: ${({ palette }) => `linear-gradient(to right bottom, ${palette.primary[0]}, ${palette.complement[0]})`};
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    font-size: 1.4rem;
    
    * {
      display: flex;
      flex-flow: column;
      align-items: center;
      color: ${({ palette }) => palette.font.default};

    }
    
    h1 {
    }

    h2 {
    }
  }
`;

export default GlobalStyle;
