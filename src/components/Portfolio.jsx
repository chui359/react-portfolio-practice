import React from 'react'
import { StylePortfolio } from './styles/Portfolio.styled'
import { Container } from './styles/Container.styled'
import { FaRegWindowMaximize } from 'react-icons/fa'

function Portfolio() {
  return (

    <StylePortfolio>
      <Container>
      <h1>Portfolio</h1>

      <div className="card">

        <div className='img-container'>
        <img src=".././images/what-to-eat3.png" alt="" />
        </div>

        <div className="container">
          <h2>哇兔伊</h2>
          <p>
            使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。
          </p>
          <div className='small-card-container'>
            <div className='small-card'>React</div>
            <div className='small-card'>Express</div>
            <div className='small-card'>Node.js</div>
            <div className='small-card'>MongoDB</div>
          </div>
          <div className='demo-container'>
              <div className='demo' onClick={() => {window.open("https://what-to-eat1.netlify.app/");}}>
                Live Demo&nbsp;<FaRegWindowMaximize/>
              </div>
          </div>
        </div>

      </div>

      <div className='portfolio'>
        
      <div className='portfolio-card'>
        <img src=".././images/what-to-eat3.png" alt="" />
        <div className="portfolio-dec">
          <h2>哇兔伊</h2>
          <p>
            使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。
          </p>
          <div className='small-card-container'>
            <div className='small-card'>React</div>
            <div className='small-card'>Express</div>
            <div className='small-card'>Node.js</div>
            <div className='small-card'>MongoDB</div>
          </div>
          <div className='demo-container'>
              <div className='demo' onClick={() => {window.open("https://what-to-eat1.netlify.app/");}}>
                Live Demo&nbsp;<FaRegWindowMaximize/>
              </div>
          </div>
        </div>
      </div>

      <div className='portfolio-card'>
        <img src=".././images/what-to-eat3.png" alt="" />
        <div className="portfolio-dec">
          <div>
          <h2>哇兔伊</h2>
          <p>
            使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。
          </p>
          <div className='small-card-container'>
            <div className='small-card'>React</div>
            <div className='small-card'>Express</div>
            <div className='small-card'>Node.js</div>
            <div className='small-card'>MongoDB</div>
          </div>
          <div className='demo-container'>
              <div className='demo' onClick={() => {window.open("https://what-to-eat1.netlify.app/");}}>
                Live Demo&nbsp;<FaRegWindowMaximize/>
              </div>
          </div>
        </div>
        </div>
      </div>

      </div>
    
      </Container>
    </StylePortfolio>
    
  )
}

export default Portfolio