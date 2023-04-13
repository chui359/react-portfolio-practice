import styled from "styled-components";

export const StylePortfolio = styled.div`

    .portfolio {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
        .portfolio-card {
            width: 50%;
            position: relative;
        }

        img {
            width: 100%;
            position: relative;
        }

        .portfolio-dec {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: black;
            width: 0;
            height: 0;
            overflow: hidden;
            opacity: 0.7;
            transition: all 0.5s ease-in-out;;
            text-align: center;
        }

        p {
            font-size: 25px;
            text-align: center;
            text-indent: 2em;
            margin: 0 auto;
        }
    }

    .portfolio-card:hover .portfolio-dec {
            display: block;
            color: white;
            width: 100%;
            height: 100%;
        }
    
    .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        margin: 50px auto;
        

        .img-container {
            width: 50%;
            -webkit-filter: brightness(100%);
        }

        .img-container:hover {
            -webkit-filter: brightness(70%);
            -webkit-transition: all 1s ease;
            -moz-transition: all 1s ease;
            -o-transition: all 1s ease;
            -ms-transition: all 1s ease;
            transition: all 1s ease;
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
        background-color: white;
        color: black;
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