import styled from "styled-components";


export const StyleHeader = styled.div`

    header {
        background-color: #fff;
        overflow: hidden;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        position: fixed; /* Set the navbar to fixed position */
        top: 0; /* Position the navbar at the top of the page */
        width: 100%; /* Full width */
        z-index: 1;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 10px;
    }

    h2 {
        margin: 0 auto 0 50px;
        font-family: DM Sans,sans-serif;
        font-size: 1.5em;
        font-weight: bold;
        font-family: 'Rock Salt', cursive;
    }

    nav{
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 50px;

        ul{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        li {
            margin-left: 50px;
            cursor: pointer;
            position: relative;
            font-family: DM Sans,sans-serif;
            font-weight: 700;

            /* "to left" / "to right" - affects initial color */
            background: linear-gradient(to left, black 50%, #a57856 50%) right;
            background-size: 200%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: .5s ease-out;
        }

        li:hover {
            color: #a57856;
            background-position: left;
        }

    }

    button {
        padding: 30px 50px;
        margin-left: 100px;
        margin-top: 20px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        border-radius: 10px;
        border: none;
        background: ${({theme}) => theme.colors.purple};
    }
`