import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Notification } from 'components'
import logo from 'assets/img/MateFitLogo-Horizonal.png'
import bell from 'assets/img/bell.png'
import bellActive from 'assets/img/bell_active.png'

export default class Nav extends Component {
  state = {
    isNotiOpened: false,
    isNotiExists: false,
  }

  toggleNoti = () => {
    this.setState(state => ({
      ...state,
      isNotiOpened: !state.isNotiOpened,
    }))
  }
  
  render() {
    const { isNotiOpened, isNotiExists } = this.state
    const { signup } = this.props
    return (
      <nav className="nav">
        <div className="nav-container">
          <Link to="/main">
            <img src={logo} alt="Mate Fit!" className="matefit-logo-nav" />
          </Link>
          {
            signup ? <></>
            :
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <div className="noti-icon-container" onClick={this.toggleNoti}>
                  <img src={isNotiExists ? bellActive : bell} alt="알림" className="notification" />
                </div>
                {
                  isNotiOpened &&
                  <Notification />
                }
              </li>
              <Link to="/upload">
                <li className="nav-menu-item">글 올리기</li>
              </Link>
              <Link to="/mypage">
                <li className="nav-menu-item">마이페이지</li>
              </Link>
              <Link to="/">
                <li className="nav-menu-item">로그아웃</li>
              </Link>
            </ul>
          }
        </div>
      </nav>
    )
  }
}
