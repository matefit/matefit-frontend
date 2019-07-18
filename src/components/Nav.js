import React, { Component } from 'react'
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
          <img src={logo} alt="Mate Fit!" className="matefit-logo-nav" />
          {
            signup ? <></>
            :
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <img src={isNotiExists ? bellActive : bell} alt="알림" className="notification" onClick={this.toggleNoti} />
                {
                  isNotiOpened &&
                  <Notification />
                }
              </li>
              <li className="nav-menu-item">글 올리기</li>
              <li className="nav-menu-item">마이페이지</li>
              <li className="nav-menu-item">로그아웃</li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}
