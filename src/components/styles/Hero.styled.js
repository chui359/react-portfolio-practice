import styled from "styled-components";

export const StyleHero = styled.div`

    .home-container {
        gap: 1rem;
    }
    .home-content {
        grid-template-columns: .5fr 3fr;
        padding-top: 3.5rem;
        align-items: center;
    }
    .home-social {
        display:grid;
        grid-template-columns: max-content;
        row-gap: 1rem;
    }
    .home-social-icon {
        font-size: 1.25rem;
        color: var(--first-color);
    }
    .home-social-icon:hover {
        color: var(--first-color-alt);
    }

    .row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row-reverse;
    }
    .imgBx img {
        width: 200px;
        border-radius: 150px;
        background-color: var(--first-color);
    }
    .home-data {
        grid-column: 1/3;
    }
    .home-title {
        font-size: var(--big-font-size);
    }
    .home-subtitle {
        font-size: var(--h3-font-size);
        color: var(--text-color);
        font-weight: var(--font-meduin);
        margin-bottom: var(--mb-0-75);
    }
    .home-description {
        margin-bottom: var(--mb-2);
    }
    .home-scroll {
        display: none;
    }
    .home-scroll-button {
        color: var(--first-color);
        transition: .3s;
    }
    .home-scroll-button:hover {
        transform: translateY(.25rem);
    }
    .home-scroll-mouse {
        font-size: 2rem;
    }
    .home-scroll-name {
        font-size: var(--small-font-size);
        color: var(--title-color);
        font-weight: var(--font-meduin);
        margin-right: var(--mb-0-25);
    }
    .home-scroll-arrow{
        font-size: 1.25rem;
    }

    .hero-data {
        margin-right:100px;
    }

    @media screen and (max-width: 350px) {
        .home-content {
            grid-template-columns: .25fr 3fr;
        }
        .imgBx img{
            width: 180px;
        }

    }

        /* For small devices */
    @media screen and (max-width: 350px) {
        .home-content{
            grid-template-columns: .25fr 3fr;
        }
        .imgBx img{
            width: 180px;
        }
    }

    /* For medium devices */
    @media screen and (min-width: 568px) {
        .home-content {
            grid-template-columns:max-content 1fr 1fr;
        }
        .home-data{
            grid-column: initial;
        }
        .home-img{
            order: 1;
            justify-self: center;
        }
        .imgBx img{
            width: 280px;
        }
    }

    /* For medium devices */
    @media screen and (min-width: 768px) {
        .home-container{
            row-gap: 5rem;
        }
        .home-content{
            padding-top: 5.5rem;
            column-gap: 2rem;
        }
        .imgBx img{
            width: 270px;
        }
        .home-scroll{
            display: block;
        }
        .home-scroll-button{
            margin-left: 3rem;
        }
    }

    /* For large devices */
    @media screen and (min-width: 1024px) {
        .imgBx img{
            width: 320px;
        }
        .home-social{
            /* transform: translateX(-6rem) */
        }
        .home-content {
            grid-template-columns:0.3fr 1fr 1fr;
        }
        .home-scroll {
        display: block;
        text-align: center;
        }
        .home-social-icon {
        font-size: 1.5rem;
        }

    }
`