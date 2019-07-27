import React, { Component } from 'react'
import { Nav, Header, SearchCard,MyPageMenu } from 'components'
import 'styles/MyPage.scss'

export default class MatchedMate extends Component {
  render() {
    return (
      <div className="mypage-container">
        <Nav />
        <Header title="마이페이지" />
        <div className="header-text">MAIT FIT!</div>
        <div className="my-page">
          <MyPageMenu menu="matched"/>
          <div className="my-card-group">
            <SearchCard matched
              title="화난 콘"
              position="서울특별시 강남구"
              percentage={58}
            />
            <SearchCard matched
              title="신난 제이지"
              position="서울특별시 강남구"
              percentage={64}
            />
            <SearchCard matched
              title="애교뿜뿜 라이언"
              position="서울특별시 강남구"
              percentage={52}
            />
            <SearchCard matched
              title="씩씩거리는 제이지"
              position="서울특별시 강남구"
              percentage={71}
            />
          </div>
        </div>
      </div>
    )
  }
}
