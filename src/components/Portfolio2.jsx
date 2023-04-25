import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { StyledPortfolio } from './styles/Portfolio2'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Portfolio2() {

  return (
    <StyledPortfolio>
    <div className="portfolio section" id='portfolio'>
        <h2 className="section-title">Portfolio</h2>
        <span className="section-subtitle">Most recent work</span>

        <div className="portfolio-container container">
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar]}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className='swiper-slide'
                >
                {/* portfolio 1 */}
                <SwiperSlide className="portfolio-content grid">
                    <img src=".././images/what-to-eat3.png" alt="" className="portfolio-img" />
                    <div className="portfolio-data">
                        <h3 className="portfolio-title">哇兔伊</h3>
                        <p className="portfolio-description">使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。</p>
                        <a href="/#" className="button button-flex button-small portfolio-button">Demo <FaArrowRight className='button-icon'/></a>
                    </div>
                </SwiperSlide>

                {/* portfolio 2 */}
                <SwiperSlide className="portfolio-content grid">
                    <img src=".././images/what-to-eat3.png" alt="" className="portfolio-img" />

                    <div className="portfolio-data">
                        <h3 className="portfolio-title">RSS閱讀器</h3>
                        <p className="portfolio-description">使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。</p>
                        <a href="/#" className="button button-flex button-small portfolio-button">Demo <FaArrowRight className='button-icon'/></a>
                    </div>
                </SwiperSlide>

                {/* portfolio 3 */}
                <SwiperSlide className="portfolio-content grid">
                    <img src=".././images/what-to-eat3.png" alt="" className="portfolio-img" />

                    <div className="portfolio-data">
                        <h3 className="portfolio-title">切版挑戰</h3>
                        <p className="portfolio-description">使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。</p>
                        <a href="/#" className="button button-flex button-small portfolio-button">Demo <FaArrowRight className='button-icon'/></a>
                    </div>
                </SwiperSlide>
                </Swiper>   
        </div>
        

    </div>
    </StyledPortfolio>
  )
}

export default Portfolio2