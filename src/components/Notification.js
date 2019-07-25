import React, { Component } from 'react'
import closeBtn from 'assets/img/close-btn-white.png'
import notiRed from 'assets/img/noti-red.png'
import notiBlue from 'assets/img/noti-blue.png'

export default class Notification extends Component {
  state = {
    notis: [
      // {
      //   title: '새 메이트 요청을 받았습니다.',
      //   type: 'receive'
      // },
      // {
      //   title: '내가 보낸 요청에 답변이 있습니다.',
      //   type: 'reply'
      // },
    ]
  }
  render() {
    const { notis } = this.state

    return (
      <div className="noti-container">
        <div className="head">
          <span>알림</span>
          <img src={closeBtn} alt="닫기" className="close" />
        </div>
        <ul className="noti-list">
          {
            notis.map((noti, index) => (
              <li className="noti-list-item" key={index}>
                <img
                  src={noti.type === 'receive' ? notiRed : noti.type === 'reply' ? notiBlue : null }
                  alt="알림 아이콘"
                />
                { noti.title }
              </li>
            ))
          }
          {
            notis.length <= 0 &&
            <p>표시할 알림이 없습니다.</p>
          }
        </ul>
        <div className="tail">더보기</div>
      </div>
    )
  }
}
