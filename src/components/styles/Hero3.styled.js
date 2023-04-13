import styled from "styled-components";

export const StyleHero = styled.div`


    h1 {
        font-size: 70px;
        font-weight: 700;
        font-family: 'Rock Salt', cursive;
    }

    span {
        color: ${({theme}) => theme.colors.orange};
        text-decoration: underline;
        text-decoration-color: ${({theme}) => theme.colors.yellow};
        text-decoration-thickness: 8px;
        //box-shadow: 0 10px;
        //padding-bottom: 1px;
    }

    .Hero-dec {
        text-align:center;
        margin: 0 auto;
        width: 100%;
        padding: 50px;
        background-color: ${({theme}) => theme.colors.light}
        //background-color: black;
    }

    .Hero-name {
        margin-bottom: -100px;
        margin-top: 200px;
    }

    .Hero-portfolio {
        font-size: 130px;
    }

    p {
        margin-top:30px;
        color: ${({theme}) => theme.colors.gray};
        font-size: 20px;
        line-height: 1.5;
    }

    .dec-button {
        padding: 25px 50px;
        margin-top: 40px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        background: ${({theme}) => theme.colors.brown};
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

`