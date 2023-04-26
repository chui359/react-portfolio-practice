import styled from "styled-components";

export const StyleFooter = styled.footer`
    .footer{
        padding-top: 2rem;
    }

    .footer-container{
        row-gap: 3.5rem;
    }

    .footer-bg{
        background-color: var(--first-color-second);
        padding: 2rem 0 3rem;
    }

    .footer-title{
        font-size: var(--h1-font-size);
        margin-bottom: var(--mb-0-25);
    }

    .footer-subtitle{
        font-size: var(--small-font-size);
    }

    .footer-links{
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
    }

    .footer-links:hover{
        color: var(--first-color-lighter);
    }

    .footer-social{
        font-size: 1.25rem;
        margin-right: var(--mb-1-5);
    }

    .footer-social:hover{
        color: var(--first-color-lighter);
    }

    .footer-copy{
        font-size: var(--smaller-font-size);
        text-align: center;
        color: #fff;
        margin-top: var(--mb-3);
    }

    .footer-title,
    .footer-subtitle,
    .footer-links,
    .footer-social{
        color: #fff;
    }

/* For medium devices */
@media screen and (min-width: 568px) {
    .footer-container{
        grid-template-columns: repeat(2, 1fr);
        padding: 0 1rem;
    }
}

/* For medium devices */
@media screen and (min-width: 768px) {
    .footer-container{
        grid-template-columns: repeat(3, 1fr);
    }
    .footer-bg{
        padding: 3rem 0 3.5rem;
    }
    .footer-links{
        flex-direction: row;
        column-gap: 2rem;
    }
    .footer-socials{
        justify-self: flex-end;
    }
    .footer-copy{
        margin-top: 4.5rem;
    }
}
`