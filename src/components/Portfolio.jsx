import React from 'react'
import { StylePortfolio } from './styles/Portfolio.styled'
import { Container } from './styles/Container.styled'
import { FaRegWindowMaximize, FaExternalLinkAlt } from 'react-icons/fa'

function Portfolio() {
  return (

    <StylePortfolio>
      <Container>

      <div className='portfolio'>
        <div className='container'>

          <h1 className='sub-title'> My Work</h1>

          <div className='work-list'>
            <div className="work">
              <img src=".././images/what-to-eat3.png" alt="" />
              <div className="layer">
                <h3>哇兔伊</h3>
                <p>
                使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。
                </p>
                <a href="https://what-to-eat1.netlify.app/"><FaExternalLinkAlt/></a>
              </div>
            </div>
            <div className="work-dec">
                <h3>哇兔伊</h3>
                <p>
                使用者可以在此新增喜歡的食物、食物類型。哇兔伊會制定一個食物的詢問計劃，透過排除法，一步步找出使用者當下對於食物的需求和喜好。
                </p>
                <a className='btn' href="https://what-to-eat1.netlify.app/">Live Demo</a>
            </div>

          </div>
        </div>
        
      </div>
      </Container>
    </StylePortfolio>
    
  )
}

export default Portfolio