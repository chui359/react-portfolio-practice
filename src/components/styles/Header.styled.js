import styled from "styled-components";


export const StyleHeader = styled.div`

    * {
        color: var(--title-color);
    }

    nav {
        display:flex;
        align-items: center;
        justify-content: space-between; 
    }

    .logo {
        margin: 2rem;
    }

    .flex {
        display:flex;
        gap: var(--gap, 1rem);
    }
    
    .mobile-nav-toggle {
        display:none;
        cursor: pointer;
    }

    nav ul {
    padding: 15px;
    margin: 0;

    /* background: hsl(0 0% 0% / 0.5); */
    }

    nav ul li a {
        display: flex;
        justify-content:center;
        align-items:center;
        font-size: var(--h3-font-size);
    }

    nav ul li .Link {
        display: flex;
        justify-content:center;
        align-items:center;
        font-size: var(--h3-font-size);
        cursor: pointer;
    }

    .bar-close {
        display: none;
    }

    nav a > [aria-hidden="true"]{
        font-weight: 700;
        margin-inline-end: 0.75em;
    }

    @media (max-width: 35em) {
        .navigation {
            --gap: 2em;
            position: fixed;
            inset: 0 0 0 30%;
            z-index: 1000;
            flex-direction:column;
            padding: min(30vh, 10rem) 2em;
            transform: translateX(100%);
            transition: transform 350ms ease-out;
        }

        .navigation[data-visible="true"]{
            transform: translateX(0%);
        }

        .mobile-nav-toggle {
            display: block;
            position: absolute;
            z-index: 9999;
            top: 1.7rem;
            right: 2rem;
            font-size: 2rem;
            position: fixed;
        }
    }

    

    
`