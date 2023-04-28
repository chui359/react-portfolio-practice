import styled from "styled-components";

export const StyleExperience = styled.section`
.experience-tabs{
    display: flex;
    justify-content:space-evenly;
    margin-bottom: var(--mb-2);
}

.experience-button{
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    cursor: pointer;
}
.experience-button:hover{
    color: var(--first-color);
}

.experience-icon{
    font-size: 1.8rem;
    margin-right: var(--mb-0-25);
}

.experience-data{
    display:grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
}

.experience-title{
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
}

.experience-subtitle{
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
}

.experience-calendar{
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
}

.calendar-icon{
    margin-right: .5rem;
}

.experience-rounder{
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--first-color);
    border-radius: 50%;
}

.experience-line{
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    transform: translate(6px, -7px);
}

.experience-button[show-color="true"]{
    color: var(--first-color);
}
.experience-content[show-content="true"]{
    display: block;    
}
.experience-content[show-content="false"]{
    display: none;
}

/* For small devices */
@media screen and (max-width: 350px) {
    .experience-data{
        gap: .5rem;
    }
}

/* For medium devices */
@media screen and (min-width: 568px) {
    .experience-section{
        display: grid;
        grid-template-columns: .6fr;
        justify-content: center;
    }
}

/* For medium devices */
@media screen and (min-width: 768px) {
    .experience-tabs{
        justify-content: center;
    }
    .experience-button{
        margin: 0 var(--mb-1);
    }
    .experience-section{
        grid-template-columns: .6fr;
    }
}
`