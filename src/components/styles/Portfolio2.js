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
    height: 50vh;
}
.swiper-button-prev::after,
.swiper-button-next::after{
    content: '';
}

.swiper-portfolio-icon{
    font-size: 2rem;
    color: var(--first-color);
}

.swiper-button-prev{
    left: -0.5rem;
}
.swiper-button-right{
    right: -0.5rem;
}
.swiper-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.my-swiper-bullet {
  width: 15px;
  height: 15px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: var(--first-color-lighter);
  cursor: pointer;
}

.my-swiper-bullet-active {
  background-color: var(--first-color);
}

/* For medium devices */
@media screen and (min-width: 568px) {
    .portfolio-content{
        grid-template-columns: repeat(2, 1fr);
    }
    .swiper-slide{
    
    }
}

/* For medium devices */
@media screen and (min-width: 768px) {
    .portfolio-img{
        width:320px;
    }
    .portfolio-content{
        align-items: center;
    }
}

@media screen and (min-width: 1024px) {
    .portfolio-content{
        column-gap: 5rem;
    }
}
`