import styled from "styled-components";

export const StyleHero = styled.div`

    display: flex;

    h1 {
        font-size: 70px;
        font-weight: 700;
        font-family: 'DM Sans', sans-serif;
    }

    span {
        color: ${({theme}) => theme.colors.purple};
        text-decoration: underline;
        text-decoration-color: ${({theme}) => theme.colors.yellow};
        text-decoration-thickness: 8px;
        //box-shadow: 0 10px;
        //padding-bottom: 1px;
    }

    .Hero-dec {
        margin-top: 150px;
        margin-left: 50px;
        margin-right: 20px;
        width: 500px;
    }

    p {
        margin-top:30px;
        color: ${({theme}) => theme.colors.gray};
        font-size: 20px;
        line-height: 1.5;
    }

    button {
        padding: 25px 50px;
        margin-top: 40px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        background: ${({theme}) => theme.colors.purple};
    }

    .Hero-link {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 50px;
    }

    .Hero-link li{
        margin-right: 30px;
    }

    .Hero-img {
        position: relative;
        text-align: center;
        color: white;
        margin-top: 50px;
        margin-left: 100px;
    }

    img {
        width: 450px;
    }

    .More-inf {
        position: absolute;
        bottom: 100px;
        left: 50%;
    }
`