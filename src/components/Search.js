import React, { Component } from 'react'
import { Nav, Header, SearchCard } from 'components'
import illust from 'assets/img/illust_04.png'
import deleteBtn from 'assets/img/delete-btn.png'
import 'styles/Search.scss'

export default class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <Nav />
        <Header title="검색결과" />
        <div className="illust">
          <img src={illust} alt="상자들을 들고 있는 남자 일러스트" />
        </div>
        <div className="search">
          <aside className="search-filter">
            <div className="head">
              <h2>검색 정보</h2>
            </div>
            <div className="body">
              <div className="filter-group">
                <span className="filter-label">성별</span>
                <span className="filter-content">남성</span>
                <img src={deleteBtn} alt="조건 제거" className="delete-btn" />
              </div>
              <div className="filter-group">
                <span className="filter-label">지역</span>
                <span className="filter-content">서울시, 신림동</span>
                <img src={deleteBtn} alt="조건 제거" className="delete-btn" />
              </div>
              <div className="filter-group">
                <span className="filter-label">거주지</span>
                <span className="filter-content">미보유</span>
                <img src={deleteBtn} alt="조건 제거" className="delete-btn" />
              </div>
              <div className="tags-selected">
                <h3>태그</h3>
                <div className="tag">
                  <span className="tag-block">#Tag-name</span>
                  <img src={deleteBtn} alt="태그 제거" className="delete-btn" />
                </div>
                <div className="tag">
                  <span className="tag-block">#Tag-name</span>
                  <img src={deleteBtn} alt="태그 제거" className="delete-btn" />
                </div>
                <div className="tag">
                  <span className="tag-block">#Tag-name</span>
                  <img src={deleteBtn} alt="태그 제거" className="delete-btn" />
                </div>
                <div className="tag">
                  <span className="tag-block">#Tag-name</span>
                  <img src={deleteBtn} alt="태그 제거" className="delete-btn" />
                </div>
              </div>
              <div className="tags-more">
                <h3>태그 추가하기</h3>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
                <div className="tag">
                  #Tag-name
                </div>
              </div>
            </div>
            <div className="tail"></div>
          </aside>
          <div className="search-result">
            <SearchCard sent
              title="메이트 닉네임"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard receive
              title="메이트 닉네임"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard matched
              title="메이트 닉네임"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard
              title="메이트 닉네임"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard
              title="메이트 닉네임"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard
              title="메이"
              position="서울특별시 강남구"
              percentage={50}
            />
            <SearchCard
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
