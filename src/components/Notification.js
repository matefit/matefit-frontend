import React, { Component } from 'react'
import closeBtn from 'assets/img/close-btn-white.png'
import notiRed from 'assets/img/noti-red.png'
import notiBlue from 'assets/img/noti-blue.png'

export default class Notification extends Component {
  render() {
    return (
      <div className="noti-container">
        <div className="head">
          <span>알림</span>
          <img src={closeBtn} alt="닫기" className="close" />
        </div>
        <ul className="noti-list">
          <li className="noti-list-item">
            <img src={notiRed} alt="새 메이트 요청" />
            새 메이트 요청을 받았습니다.
          </li>
          <li className="noti-list-item">
            <img src={notiBlue} alt="보낸 요청에 대한 답변" />
            내가 보낸 요청에 답변이 있습니다.
          </li>
          <li className="noti-list-item">
            새 소식에 대해 알립니다.
          </li>
        </ul>
        <div className="tail">더보기</div>
      </div>
    )
  }
}
