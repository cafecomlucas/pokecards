import { createGlobalStyle, keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(0deg)
  }
  from {
    transform: rotate(-360deg)
  }`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body, html{ min-height: 101%;}

  body {
    background: #f0f0f0;
  }

  body,
  input,
  button {
    color: #333;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .spinner{
    animation: ${rotate} 800ms linear infinite;
  }
`;
