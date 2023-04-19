import styled from "styled-components";

export const StylePortfolio = styled.div`

    .portfolio {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 80px 0;
        text-align: center;
        
        .portfolio-card {
            width: 50%;
            position: relative;
        }

        img {
            width: 100%;
            position: relative;
            transition: transform 0.5s;
        }

        .portfolio-dec {
            position: absolute;
            background-color: black;
            width: 100%;
            height: 0;
            overflow: hidden;
            opacity: 0.7;
            transition: height 0.5s;
            text-align: center;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        p {
            font-size: 25px;
            text-align: start;
            text-indent: 2em;
            margin: 0 auto;
            margin: 20px 50px;
            opacity: 1;
        }

        a{
            color: #fff;
        }

        .btn {
            margin: 0 auto;
        }
    }

    .sub-title {
    font-size: 60px;
    font-weight: 600;
    color: #fff;
    }

    .portfolio-card:hover .portfolio-dec {
            display: block;
            height: 100%;
        }
    
    .small-card-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .small-card {
        padding: 10px;
        margin: 10px;
        font-size: 25px;
        background-color: white;
        color: black;
        opacity: 1;
    }

    .demo-container {
        margin: 30px auto;
        padding: 20px;
        background-color: ${({theme}) => theme.colors.yellow};
        width: max-content;
        text-align: center;
        border-radius: 15px;
        transition: 0.3s;
        opacity: 1;
    }

    .demo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        color: black;
        cursor: pointer;
    }

    .demo-container:hover {
        background-color: ${({theme}) => theme.colors.orange}
    }

    .work-list {
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-wrap: wrap;  
        margin-top: 50px;
    }

    .work {
        flex-basis: 50%;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
    }

    .work-dec {
        flex-basis: 45%;
        text-align: center;        
    }

    .sub-work {
        width:300px;
        border-radius: 10px;
        margin: 20px;
        position: relative;
        overflow: hidden;
    }

    .layer {
        height: 0;
        width: 100%;
        background: linear-gradient(rgba(0,0,0,0.6), #ff004f);
        border-radius: 10px;
        position: absolute;
        left: 0;
        bottom: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        transition: height 0.5s;
    }

    .work:hover img {
        transform: scale(1.1);
    }

    .work:hover .layer {
        height: 100%;
    }

    .sub-work:hover img {
        transform: scale(1.1);
    }

    .sub-work:hover .layer {
        height: 100%;
    }

`