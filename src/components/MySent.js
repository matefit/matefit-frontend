import React, { Component } from 'react'
import { Nav, Header, SearchCard,MyPageMenu } from 'components'
import 'styles/MyPage.scss'

export default class MySent extends Component {
  render() {
    return (
      <div className="mypage-container">
        <Nav />
        <Header title="마이페이지" />
        <div className="header-text">MAIT FIT!</div>
        <div className="my-page">
          <MyPageMenu menu="sent"/>
          <div className="my-card-group">
            <SearchCard sent
              title="졸린 무지"
              position="서울특별시 강남구"
              percentage={58}
            />
            <SearchCard sent
              title="엄지척 제이지"
              position="서울특별시 강남구"
              percentage={64}
            />
            <SearchCard sent
              title="화난 콘"
              position="서울특별시 강남구"
              percentage={52}
            />
            <SearchCard sent
              title="배불뚝 제이지"
              position="서울특별시 강남구"
              percentage={71}
            />
          </div>
        </div>
      </div>
    )
  }
}
