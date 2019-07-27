import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, FormCardMain } from 'components';
import { AuthConsumer } from 'contexts/auth';
import 'styles/Main.scss';
import illustSittingGirls from 'assets/img2/illust-sitting-girls.png';
import infoLeft from 'assets/img2/info-left.png';
import infoCenter from 'assets/img2/info-center.png';
import infoRight from 'assets/img2/info-right.png';
import mainLine from 'assets/img2/main-line.png';
import backgroundSquareUp from 'assets/img2/background-square-up.png';
import btnDown from 'assets/img2/btn-down.png';
class Main extends Component {
  state = {
    form: {
      rigion: 'everywhere',
      'room-type': 'everywhere',
      'birth-visibility': 'dontcare',
    },
    tags: [
      { name: '흡연', selected: false, },
      { name: '애완동물', selected: false, },
      { name: '직장인', selected: false, },
      { name: '학생', selected: false, },
      { name: '코골이', selected: false, },
      { name: '아침형 인간', selected: false, },
      { name: '야행성', selected: false, },
      { name: '야식', selected: false, },
      { name: '조용한 사람', selected: false, },
      { name: '사교적인 사람', selected: false, },
      { name: '다이어트 중', selected: false, },
    ],
  }

  handleChangeInput = (e) => {
    const { name, value } = e.target

    this.setState(state => ({
      ...state,
      form: {
        ...state.form,
        [name]: value,
      },
    }))
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
    const { form, tags } = this.state
    return (
      <AuthConsumer>
        {
          () => (
            <div className="main-container">
              <Nav />
              <img className="background-square-up" src={backgroundSquareUp} alt="" />
              <div className="main-header">

                <div className="main-header-text">
                  나에게 딱 맞는 <span style={{ color: '#eb6958' }}>룸메이트</span>를 <br />
                  찾아보세요.
                </div>
                <div className="main-header-description">
                  나와 메이트의 카드를 비교하여 쉽게 매칭정도를 알려드려요!
                </div>
                <img className="illust" src={illustSittingGirls} alt="" />


              </div>
              <div className="main-search-group">
                <div className="main-search-bar">
                  <div className="main-search-bar-title">
                    <span style={{ paddingRight: '240px' }}>지역</span>
                    <span style={{ paddingRight: '341px' }}>성별</span>
                    <span>방타입</span>
                  </div>
                  <div className="main-search-bar-selectors">
                    <div className="main-search-bar-select-box">
                      <select id="rigion" name="rigion" onChange={this.handleChangeInput}>
                        <option defaultValue value="everywhere">모든위치</option>
                        <option value="seoul">서울</option>
                      </select>
                    </div>

                    <div className="main-search-bar-select-box gender">
                      <label className="radio-label">
                        <input type="radio" name="birth-visibility" value="female" 
                          checked={form["birth-visibility"] === 'female'}
                          onChange={this.handleChangeInput}
                        />
                        여성
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="birth-visibility" value="male"
                          checked={form["birth-visibility"] === 'male'}
                          onChange={this.handleChangeInput}
                        />
                        남성
                      </label>
                      <label className="radio-label">
                        <input type="radio" name="birth-visibility" value="dontcare" 
                          checked={form["birth-visibility"] === 'dontcare'}
                          onChange={this.handleChangeInput}
                        />
                        무관
                      </label>
                    </div>

                    <div className="main-search-bar-select-box">
                      <select id="room-type" name="room-type" htmlFor="room-type" onChange={this.handleChangeInput}>
                        <option defaultValue value="everywhere">모두</option>
                        <option value="twoRoom">투룸</option>
                        <option value="shareHouse">쉐어하우스</option>
                        <option value="dormitory">기숙사</option>
                        <option value="apt">아파트</option>
                        <option value="other">기타</option>
                      </select>
                    </div>
                    <Link to={{
                      pathname: '/search',
                      state: {
                        filter: form,
                        tags: tags,
                      }
                    }}>
                      <button onClick={this.search}>Search</button>
                    </Link>
                  </div>
                </div>
                <div className="main-search-tag-group">
                  <div className="main-search-tag-title">
                    <div style={{ fontSize: '18px', marginBottom: '8px' }}>*설정 하시면 잘 맞는 룸메이트와 더 쉽게 매칭됩니다.</div>
                    내가 원하는 룸메
                  </div>
                  <div className="main-search-tag-selected">
                    {
                      tags.map((tag, index) => {
                        if (tag.selected) {
                          return (
                            <div className={tag.selected ? "tag selected" : "tag unselected"}
                              name={tag.name} key={index}
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
                  
                  <div className="main-search-tags">
                  <div className="tag-group">
                    {
                      tags.map((tag, index) => {
                        return (
                          <div className={tag.selected ? "tag selected" : "tag unselected"}
                            name={tag.name} key={index}
                            onClick={this.toggleTag}
                          >
                            #{tag.name}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="main-matefit-info">
                  <div className="main-matefit-info-element">
                    <img className="left" src={infoLeft} alt="" />
                    <div>나와 맞는<br />룸메이트 찾기</div>
                  </div>
                  <img className="line" src={mainLine} alt="" />
                  <div className="main-matefit-info-element">
                    <div className="info-img-wrapper">
                      <img className="center" src={infoCenter} alt="" />
                      <div className="element-text">100<span>명</span></div>
                    </div>
                    <div>MateFit! 이용자 수</div>
                  </div>
                  <img className="line" src={mainLine} alt="" />
                  <div className="main-matefit-info-element">
                    <div className="info-img-wrapper">
                      <img className="right" src={infoRight} alt="" />
                      <div className="element-text">51<span>명</span></div>
                    </div>
                    <div>메이트를 만난<br />이용자 수</div>
                  </div>
                  <div className="formcards-group">
                    <FormCardMain nickname="화난 무지" location="서울특별시 강남구" matching_degree="75" />
                    <FormCardMain nickname="벌 서는 라이언" location="서울특별시 강남구" matching_degree="63" />
                    <FormCardMain nickname="뿅뿅 네오" location="서울특별시 강남구" matching_degree="51" />
                  </div>
                  </div>
                </div>
              </div>
            
            </div>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Main;