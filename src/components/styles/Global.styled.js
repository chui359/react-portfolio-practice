import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
  * {
    box-sizing: border-box;
    }
    body {
    background: #080808;
    //color: hsl(192, 100%, 9%);
    color: #fff;
    //font-family: 'Poppins', sans-serif;
    font-family: Noto Sans TC,sans-serif;
    font-size: 1.15em;
    margin: 0;
    padding: 0;
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
    .row {
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .btn {
      display: block;
      width: fit-content;
      border: 1px solid #ff004f;
      padding: 14px 50px;
      border-radius: 6px;
      text-decoration: none;
      color: #fff;
      background-color: transparent;
      transition: 0.5s;
    }
    .btn:hover {
      background: #ff004f;
    }
    .btn.btn2 {
      display: inline-block;
      background: #ff004f;
    }
`

export default GlobalStyles