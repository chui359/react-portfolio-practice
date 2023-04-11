import styled from "styled-components";

export const StyleHero = styled.div`
    display: flex;
    margin-top: 200px;

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
        margin-left: 50px;
        margin-right: auto;
        width: 500px;
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

    .Hero-contain {
        text-align: center;
        margin-right: 0;
        margin-left: auto;
        position: relative;

        ul {
            position: absolute;
            top:60%;
            left: 45%;
            transform: translate(-50%, -50%);
            color: white;
        }

        button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            background-color: white; 
            color: black; 
            border: 2px solid #555555;
        }
    }

    .hero-img {
        //position: relative;
        z-index: -1;
        width: 450px;

    }

    .Hero-inf {
        position: absolute;
        margin: 250px auto 0 90px;
        text-align: center;
        color: white;
    }
`