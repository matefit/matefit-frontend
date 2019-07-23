import React, { Component } from 'react';
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
  render() {
    return (
      <AuthConsumer>
        {
          ({ state }) => (
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
                      <label className="radio-label"><input type="radio" name="birth-visibility" value="public" />여성</label>
                      <label className="radio-label"><input type="radio" name="birth-visibility" value="private" defaultChecked />남성</label>
                      <label className="radio-label"><input type="radio" name="birth-visibility" value="private" defaultChecked />무관</label>
                    </div>

                    <div className="main-search-bar-select-box">
                      <select id="room-type" name="room-type" htmlFor="room-type" onChange={this.handleChangeInput}>
                        <option defaultValue value="everywhere">모두</option>
                        <option value="seoul">서울</option>
                      </select>
                    </div>

                    <button>Search</button>

                  </div>


                </div>
                <div className="main-search-tag-group">
                  <div className="main-search-tag-title">
                    <div style={{ fontSize: '18px', marginBottom: '8px' }}>*설정 하시면 잘 맞는 룸메이트와 더 쉽게 매칭됩니다.</div>
                    내가 원하는 룸메
                  </div>
                  <div className="main-search-tag-selected">
                    <div className="tag selected">#비흡연</div>
                    <div className="tag selected">#애완견 가능</div>
                    <div className="tag selected">#직장인</div>

                  </div>
                  <button className="tags-drop"><img src={btnDown} alt="" /></button>
                  <div className="main-search-tags">
                    <div className="tag unselected">#비흡연</div>
                    <div className="tag unselected">#애완견 가능</div>
                    <div className="tag unselected">#직장인</div>
                    <div className="tag selected">#비흡연</div>
                    <div className="tag selected">#애완견 가능</div>
                    <div className="tag selected">#직장인</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>
                    <div className="tag unselected">#빠른입주</div>

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
                      <div className="element-text">2094<span>명</span></div>
                    </div>
                    <div>MateFit! 이용자 수</div>
                  </div>
                  <img className="line" src={mainLine} alt="" />
                  <div className="main-matefit-info-element">
                    <div className="info-img-wrapper">
                      <img className="right" src={infoRight} alt="" />
                      <div className="element-text">149<span>명</span></div>
                    </div>
                    <div>메이트를 만난<br />이용자 수</div>
                  </div>
                  <div className="formcards-group">
                    <FormCardMain nickname="메이트 닉네임" location="서울특별시 강남구" matching_degree="50" />
                    <FormCardMain nickname="메이트 닉네임" location="서울특별시 강남구" matching_degree="50" />
                    <FormCardMain nickname="메이트 닉네임" location="서울특별시 강남구" matching_degree="50" />
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