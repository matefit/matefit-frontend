import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <img src="./img/MateFitLogo-Horizonal.png" alt="Mate Fit!" className="matefit-logo-nav" />
          <ul className="nav-menu">
            <li className="nav-menu-item">검색하기</li>
            <li className="nav-menu-item">글 올리기</li>
            <li className="nav-menu-item">마이페이지</li>
            <li className="nav-menu-item">로그아웃</li>
          </ul>
        </div>
      </nav>
    )
  }
}
