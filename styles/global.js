import css from 'styled-jsx/css';

export default css.global`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    font-family: 'Noto Sans Display', sans-serif;
    color: #272a2e;
  }

  h1 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;
