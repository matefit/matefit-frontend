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
              title="화난 콘"
              position="서울특별시 강남구"
              percentage={52}
            />
            <SearchCard receive
              title="배불뚝 제이지"
              position="서울특별시 강남구"
              percentage={71}
            />
            <SearchCard receive
              title="씩씩거리는 무지"
              position="서울특별시 강남구"
              percentage={69}
            />
            <SearchCard receive
              title="신난 어피치"
              position="서울특별시 강남구"
              percentage={59}
            />
          </div>
        </div>
      </div>
    )
  }
}
