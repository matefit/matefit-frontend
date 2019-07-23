import React, { Component } from 'react'
import { Nav, Header, SearchCard, MyPageMenu } from 'components'
import 'styles/MyPage.scss'

export default class MyReceive extends Component {
  render() {
    return (
      <div className="mypage-container">
        <Nav />
        <Header title="마이페이지" />
        <div className="header-text">MAIT FIT!</div>
        <div className="my-page">
          <MyPageMenu menu="receive"/>
          <div className="my-card-group">
            <SearchCard receive
              title="메이트 닉네임"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard receive
              title="메이트 닉네임"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard receive
              title="디프만"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard receive
              title="메이트 닉네임"
              position="서울특별시 강남구"
              percentage={50}
            />
          </div>
        </div>
      </div>
    )
  }
}
