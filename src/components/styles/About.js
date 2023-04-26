import styled from "styled-components";

export const StyledAbout = styled.section`
.about-img{
    width: 200px;
    border-radius: .5rem;
    justify-self: center;
    align-self: center;
}
.about-description{
    text-align:center;
    margin-bottom: var(--mb-2-5);
}
.about-info{
    display:flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);
}
.about-info-title{
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
}

.about-info-name{
    font-size: var(--smaller-font-size);
}

.about-info-title,
.about-info-name{
    display: block;
    text-align: center;
}

.about-buttons{
    display: flex;
    justify-content:center;
}

/* For medium devices */
@media screen and (min-width: 568px) {
    .about-container{
        grid-template-columns: repeat(2, 1fr);
    }
}

/* For medium devices */
@media screen and (min-width: 768px) {
    .about-container{
        column-gap: 5rem;
    }
    .about-img{
        width: 350px;
    }
    .about-description{
        text-align: initial;
    }
    .about-info{
        justify-content: space-between;
    }
    .about-buttons{
        justify-content: initial;
    }
}
` 