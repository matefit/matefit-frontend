import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Nav, Header, SearchCard } from 'components'
import illust from 'assets/img/illust_04.png'
import illustGirlHoldingPhone from 'assets/img2/illust_05.png';
import deleteBtn from 'assets/img/delete-btn.png'
import 'styles/Search.scss'

export default class Search extends Component {
  state = {
    filter: this.props.location.state.filter,
    tags: this.props.location.state.tags
  }
  
  toggleTag = (e) => {
    const clickedTag = e.target.getAttribute('name')
    const { tags } = this.state
    const newTags = [...tags]
    const tagIndex = newTags.findIndex(tag => tag.name === clickedTag);
    if (tagIndex >= 0) {
      newTags[tagIndex].selected = !newTags[tagIndex].selected
  
      this.setState({
        tags: newTags
      })
    }
  }

  render() {
    const { filter, tags } = this.state
    return (
      <div className="search-container">
        {
          (!this.props.location.state.filter || !this.props.location.state.tags) &&
          <Redirect to="/main" />
        }
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
                <span className="filter-content">
                  {
                    filter["birth-visibility"] === 'male' ? '남성'
                    : 
                    filter["birth-visibility"] === 'female' ? '여성'
                    :
                    filter["birth-visibility"] === 'dontcare' ? '무관' : ''
                  }
                </span>
                <img src={deleteBtn} alt="조건 제거" className="delete-btn" />
              </div>
              <div className="filter-group">
                <span className="filter-label">지역</span>
                <span className="filter-content">
                  {
                    filter["rigion"] === 'everywhere' ? '모두'
                    : 
                    filter["rigion"] === 'seoul' ? '서울' : ''
                  }
                </span>
                <img src={deleteBtn} alt="조건 제거" className="delete-btn" />
              </div>
              <div className="filter-group">
                <span className="filter-label">방타입</span>
                <span className="filter-content">
                {
                  filter["room-type"] === 'everywhere' ? '모두'
                  : 
                  filter["room-type"] === 'twoRoom' ? '투룸' 
                  :
                  filter["room-type"] === 'shareHouse' ? '쉐어하우스' 
                  :
                  filter["room-type"] === 'dormitory' ? '기숙사' 
                  :
                  filter["room-type"] === 'apt' ? '아파트'
                  :
                  filter["room-type"] === 'other' ? '기타' : ''
                }
                </span>
                <img src={deleteBtn} alt="조건 제거" className="delete-btn" />
              </div>
              <div className="tags-selected">
                <h3>태그</h3>
                {
                  tags.map((tag, index) => {
                    if (tag.selected) {
                      return (
                        <div className="tag" name={tag.name} key={index}>
                          <span className="tag-block">#{tag.name}</span>
                          <img src={deleteBtn} alt="태그 제거" name={tag.name} className="delete-btn" onClick={this.toggleTag} />
                        </div>
                      )
                    } else {
                      return <React.Fragment key={index} />
                    }
                  })
                }
              </div>
              <div className="tags-more">
                <h3>태그 추가하기</h3>
                  {
                    tags.map((tag, index) => {
                      if (!tag.selected) {
                        return (
                          <div className="tag" name={tag.name} key={index} 
                            onClick={this.toggleTag}
                          >
                            #{tag.name}
                          </div>
                        )
                      } else {
                        return <React.Fragment key={index} />
                      }
                    })
                  }
              </div>
            </div>
            <div className="tail"></div>
            <div className="filter-illust">
              <img src={illustGirlHoldingPhone} alt="" />
            </div>
          </aside>
          <div className="search-result">
            <SearchCard 
              title="졸린 무지"
              position="서울특별시 강남구"
              percentage={58}
            />
            <SearchCard 
              title="엄지척 제이지"
              position="서울특별시 강남구"
              percentage={64}
            />
            <SearchCard 
              title="화난 콘"
              position="서울특별시 강남구"
              percentage={52}
            />
            <SearchCard
              title="배불뚝 제이지"
              position="서울특별시 강남구"
              percentage={71}
            />
            <SearchCard
              title="씩씩거리는 무지"
              position="서울특별시 강남구"
              percentage={69}
            />
            <SearchCard
              title="신난 어피치"
              position="서울특별시 강남구"
              percentage={59}
            />
            <SearchCard
              title="애교뿜뿜 라이언"
              position="서울특별시 강남구"
              percentage={71}
            />
          </div>
        </div>
      </div>
    )
  }
}
