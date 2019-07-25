import React, { Component } from 'react'
import { Nav } from 'components'
import illustLeft from 'assets/img/search_result_illust_left_small.png'
import illustRight from 'assets/img/illust_3_small.png'
import 'styles/SearchDetail.scss'

export default class MyMatchedDetail extends Component {
  state = {
    percentage: 50
  }

  render() {
    const { percentage } = this.state
    
    return (
      <div className="search-detail-container">
        <Nav />
        <div className="result">
          <h2>이 메이트가 당신과 맞을 확률은</h2> 
          <svg width="380" height="380">
            <circle r="190" cx="190" cy="190" strokeDasharray={ 1193.8 / 100 * percentage + ' 1193.8' } className="circle-graph" />
            <circle r="160" cx="190" cy="190" className="circle-front" />
            <text x="162" y="50" fill="#eb6958" className="percentage">
              {percentage}%
            </text>
          </svg>
          <p className="matching-message">
            괜찮은 룸메를 찾았어요! 벌써 반이나 맞는 걸요?<br />
            주말엔 같이 영화도 즐길 수 있는 정도
          </p>
        </div>
        <div className="opponent-message">
          <div className="head">
            상대가 찾는 Mate
          </div>
          <div className="tail">
            <p>
              안녕하세요 저는 ㅇㅇ시 ㅇㅇ동으로 이사를 하려는 직장인입니다.
              1년정도 거주할 방을 찾고 있는데 룸메이트를 찾으려고 합니다.
              잘 맞게 되면 더 살게될 수도 있습니다.
            </p>
          </div>
        </div>
        
        <div className="card-container">
          <ul className="card my">
            <img src={illustLeft} alt="택배를 받은 남성" className="illust-left" />
            <li className="card-head">나의 카드</li>
            <li className="card-detail match">
              <p className="label">성별</p>
              <p className="content">남성</p>
            </li>
            <li className="card-detail">
              <p className="label">취침시간</p>
              <p className="content">10~12시</p>
            </li>
            <li className="card-detail">
              <p className="label">애완동물</p>
              <p className="content">좋아함</p>
            </li>
            <li className="card-detail match">
              <p className="label">직업</p>
              <p className="content">직장인</p>
            </li>
            <li className="card-detail">
              <p className="label">거주기간</p>
              <p className="content">2년 이상</p>
            </li>
            <li className="card-detail match">
              <p className="label">흡연여부</p>
              <p className="content">비흡연</p>
            </li>
            <li className="card-tail"></li>
          </ul>
          <ul className="card opponent">
            <img src={illustRight} alt="청소를 하고 있는 남성" className="illust-right" />  
            <li className="card-head">상대의 카드</li>
            <li className="card-detail match">
              <p className="label">성별</p>
              <p className="content">남성</p>
            </li>
            <li className="card-detail">
              <p className="label">취침시간</p>
              <p className="content">12~2시</p>
            </li>
            <li className="card-detail">
              <p className="label">애완동물</p>
              <p className="content">싫어함</p>
            </li>
            <li className="card-detail match">
              <p className="label">직업</p>
              <p className="content">직장인</p>
            </li>
            <li className="card-detail">
              <p className="label">거주기간</p>
              <p className="content">1년</p>
            </li>
            <li className="card-detail match">
              <p className="label">흡연여부</p>
              <p className="content">비흡연</p>
            </li>
            <li className="card-tail">더보기</li>
          </ul>
        </div>
        <p className="match-description">
          메이트 요청을 받았으며, <span>당신이 수락하면 상대와 당신의 연락처가 서로 공개</span>됩니다.
        </p>
        <button>
          요청 수락하기
        </button>
      </div>
    )
  }
}
