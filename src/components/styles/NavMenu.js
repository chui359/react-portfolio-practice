import styled from "styled-components";

export const StyleNav = styled.header`

    .scroll-header{
        width:100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: var(--z-fixed);
        background-color: var(--body-color);
    }
    

    .nav{
        max-width: 968px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-logo{
        /* background-image: url(".././images/brush1.png"); */
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
        font-size: 1.25rem;
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
    .change-theme[show-icon="false"]{
        display:none;
    }

    .nav-menu[show-menu="true"]{
        bottom: 0;
    }

    .scroll-header[scroll-header="true"]{
        box-shadow: 0 -1px 4px rgba(0,0,0,0.15)
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

    /* scroll up */
    .scrollup{
        position: fixed;
        right: 1rem;
        bottom: -20%;
        background-color: var(--first-color);
        opacity: 0.8;
        padding: 0.3rem;
        border-radius: 0.4rem;
        z-index: var(--z-tooltip);
        transition: 0.4s;
    }

    .scrollup:hover{
        background-color: var(--first-color-alt);
    }

    .scrollup-icon{
        font-size: 1.5rem;
        color: #fff;
    }

    .scrollup[show-scrollup="true"]{
        bottom: 5rem;
    }

    /* theme button */
    .nav-btns{
        display: flex;
        align-items: center;
    }
    
    .change-theme{
        font-size: 1.25rem;
        color: var(--title-color);
        margin-right: var(--mb-1);
        cursor: pointer;
    }
    .change-theme:hover{
        color: var(--first-color);
    }

    /* For small devices */
@media screen and (max-width: 350px) {
    .nav-menu{
    padding: 2rem .25rem 4rem;
    }
    .nav-list{
        column-gap: 0;
    }
}

/* For medium devices */
@media screen and (min-width: 768px) {
    .scroll-header{
        top: 0;
        bottom: initial;
        padding: 0 1rem;
    }
    .nav{
        height: calc(var(--header-height) + 1.5rem);
        column-gap: 1rem;
        max-width: 1124px;
    }
        
    .nav-icon,
    .nav-close,
    .nav-toggle{
        display: none;
    }
    .nav-list{
        display: flex;
        column-gap: 2rem;
    }
    .nav-menu{
        margin-left: auto;
    }
    .change-theme{
        margin: 0;
        font-size: 1.5rem;
        margin-left: var(--mb-1);
    }
}
`