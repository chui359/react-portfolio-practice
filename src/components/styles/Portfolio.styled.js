import styled from "styled-components";

export const StylePortfolio = styled.div`
    
    .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        margin: 50px auto;
        padding: 20px;

        .img-container {
            width: 50%;
        }

        img {
            border-radius: 10px;
        }

        .container {
            text-align: center;
            width: 40%;
        }

        p {
            font-size: 25px;
            text-align: start;
            text-indent: 2em;
        }
    }

    .card-even {
        flex-direction: row-reverse;
    }

    .small-card-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .small-card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding: 10px;
        margin: 10px;
        font-size: 25px;
    }

    .demo-container {
        margin: 30px;
    }

    .demo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        transition: 0.3s;
        cursor: pointer;
    }

    .demo:hover {
        color: ${({theme}) => theme.colors.brown}
    }

`