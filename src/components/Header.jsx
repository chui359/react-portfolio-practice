import React from 'react'
import { StyleHeader } from './styles/Header.styled'

export const Header = () => {
  return (
    <StyleHeader>
      <header>
        <div>
        <h2>YUN CHENG</h2>
        <nav>
          <ul>
            <li>首頁</li>
            <li>關於我</li>
            <li>專案</li>
            <li>聯繫</li>
          </ul>
        </nav>
        </div>
      </header>
    </StyleHeader>
  )
}
