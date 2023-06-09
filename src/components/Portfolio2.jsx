import React from 'react'
import { FaArrowRight,FaAngleRight,FaAngleLeft } from 'react-icons/fa'
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
        <h2 className="section-title">作品集</h2>
        <span className="section-subtitle">Most recent work</span>

        <div className="portfolio-container container">
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar]}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                  }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    bulletClass: 'my-swiper-bullet',
                    bulletActiveClass: 'my-swiper-bullet-active',
                }}
                className='swiper-slide'
                >
                <div className="swiper-button-prev"><FaAngleLeft className='swiper-portfolio-icon'/></div>
                <div className="swiper-button-next"><FaAngleRight className='swiper-portfolio-icon'/></div>
                <div className='swiper-pagination'></div>
                {/* portfolio 1 */}
                <SwiperSlide className="portfolio-content grid">
                    <img src=".././images/what-to-eat-blue.png" alt="" className="portfolio-img" />
                    
                    <div className="portfolio-data">
                        <h3 className="portfolio-title">哇兔伊</h3>
                        <p className="portfolio-description">使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。</p>
                        <div className='card-container'>
                            <p className='card'>React</p>
                            <p className='card'>node.js</p>
                            <p className='card'>Express.js</p>
                            <p className='card'>MongoDB</p>
                        </div>
                        <a href="https://what-to-eat1.netlify.app/" target='_blank' rel="noopener noreferrer" className="button button-flex button-small portfolio-button">線上作品 <FaArrowRight className='button-icon'/></a>
                    </div>
                </SwiperSlide>

                {/* portfolio 2 */}
                <SwiperSlide className="portfolio-content grid">
                    <img src=".././images/rss-reader3.png" alt="" className="portfolio-img" />

                    <div className="portfolio-data">
                        <h3 className="portfolio-title">RSS閱讀器</h3>
                        <p className="portfolio-description">使用者可以輸入RSS的網址，來訂閱相關網站提供的資訊。以此可以定期查看網站是否有更新的內容，並呈現於介面讓使用者可以查看。</p>
                        <div className='card-container'>
                            <p className='card'>Vue</p>
                        </div>
                        <a href="https://yun-cheng-dashboard.netlify.app/" target='_blank' rel="noopener noreferrer" className="button button-flex button-small portfolio-button">線上作品 <FaArrowRight className='button-icon'/></a>
                    </div>
                </SwiperSlide>

                {/* portfolio 3 */}
                <SwiperSlide className="portfolio-content grid">
                    <img src=".././images/challenge1.png" alt="" className="portfolio-img" />

                    <div className="portfolio-data">
                        <h3 className="portfolio-title">響應式導覽元件挑戰</h3>
                        <p className="portfolio-description">此為Frontend Mentor提供的前端練習挑戰，此挑戰主要是在練習響應式網頁的導覽元件和主頁面的切版。</p>
                        <div className='card-container'>
                            <p className='card'>HTML</p>
                            <p className='card'>CSS</p>
                            <p className='card'>JavaScript</p>
                        </div>
                        <a href="https://navigation-challenge.netlify.app/" target='_blank' rel="noopener noreferrer" className="button button-flex button-small portfolio-button">線上作品 <FaArrowRight className='button-icon'/></a>
                    </div>
                </SwiperSlide>
                </Swiper>   
        </div>
        

    </div>
    </StyledPortfolio>
  )
}

export default Portfolio2