import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
  * {
    box-sizing: border-box;
    }
    body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    //font-family: 'Poppins', sans-serif;
    font-family: Noto Sans TC,sans-serif;
    font-size: 1.15em;
    margin: 0;
    }
    p {
    opacity: 0.6;
    line-height: 1.5;
    }
    img {
    max-width: 100%;
    }
    a {
      text-decoration: none;
      color: #000;
    }
    button {
        cursor: pointer;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    div {
      list-style: none;
    }
    li {
      line-height: 2.2;
    }
    h1,
    h2,
    h3 {
      font-weight: 600;
      margin-bottom: 10px;
    }
`

export default GlobalStyles