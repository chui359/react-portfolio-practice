import styled from "styled-components";

export const StyleContactMe = styled.section`
    .contact-container{
        row-gap: 3rem;
    }

    .contact-information{
        display: flex;
        margin-bottom: var(--mb-2);
    }

    .contact-icon{
        font-size: 2rem;
        color: var(--first-color);
        margin-right: var(--mb-0-75);
    }

    .contact-title{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
    }

    .contact-subtitle{
        font-size: var(--small-font-size);
        color: var(--text-color-light);
    }

    .contact-content{
        background-color: var(--input-color);
        border-radius: .5rem;
        padding: .75rem 1rem .25rem;
    }

    .contact-label{
        font-size: var(--small-font-size);
        color: var(--title-color);
    }

    .contact-input{
        width: 100%;
        background-color: var(--input-color);
        color: var(--text-color);
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        border: none;
        outline: none;
        padding: 0.25rem 0.5rem 0.5rem 0; 
    }
    button{
        border: none;
        text-decoration: none;
        font-size: var(--h3-font-size);
    }

    @media screen and (min-width: 568px) {
    .contact-container{
        grid-template-columns: repeat(2, 1fr);
    }
    }

    /* For large devices */
    @media screen and (min-width: 1024px) {
        .contact-form{
            width: 460px;
        }
        .contact-inputs{
            grid-template-columns: repeat(2, 1fr);
        }
    }
`