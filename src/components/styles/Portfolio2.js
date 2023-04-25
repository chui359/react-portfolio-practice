import styled from "styled-components";

export const StyledPortfolio = styled.section`
.portfolio-container{
    
}

.portfolio-content{
    padding: 0 1.5rem;
}

.portfolio-img{
    width: 265px;
    border-radius: 0.5rem;
    justify-self: center;
}

.portfolio-title{
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
}

.portfolio-description{
    margin-bottom: var(--mb-0-75);
}

.portfolio-button:hover{
    .button-icon{
        transform: translateX(.25rem);
    }
}
.swiper-slide{
    height: 400px;
}
`