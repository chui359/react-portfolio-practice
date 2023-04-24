import styled from "styled-components";

export const StyleNav = styled.header`
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);

    .nav{
        max-width: 968px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-logo,
    .nav-toggle{
        color: var(--title-color);
        font-weight: var(--font-medium);
    }

    .nav-logo:hover{
        color: var(--first-color);
    }

    .nav-toggle{
        font-size: 1.1rem;
        cursor: pointer;
    }
    .nav-toggle:hover{
        color: var(--first-color);
    }

    .nav-list{
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    
    .nav-link{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: var(--small-font-size);
        color: var(--title-color);
        font-weight: var(--font-medium);
    }

    .nav-link:hover{
        color: var(--first-color);
    }

    .nav-icon{
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .nav-close{
        position: absolute;
        right: 1.3rem;
        bottom: 0.5rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--first-color);
    }
    .nav-close:hover{
        color: var(--first-color-alt);
    }
    .nav-menu[show-menu="true"]{
        bottom: 0;
    }

    @media screen and (max-width: 767px) {
        .nav-menu{
            position: fixed;
            bottom: -100%;
            left: 0;
            width: 100%;
            background-color: var(--body-color);
            padding: 2rem 1.5rem 4rem;
            box-shadow: 0 -1px 4px rgba(0,0,0,0.15);
            border-radius: 1.5rem 1.5rem 0 0;
            transition: .3s;
        }
    }
`