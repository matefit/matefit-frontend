import React, { Component } from 'react';
import { Nav, FormCardMain, FormCard } from 'components';
import { AuthConsumer } from 'contexts/auth';
import 'styles/Main.scss';
import illustSittingGirls from 'assets/img2/illust-sitting-girls.png';
import infoLeft from 'assets/img2/info-left.png';
import infoCenter from 'assets/img2/info-center.png';
import infoRight from 'assets/img2/info-right.png';
import mainLine from 'assets/img2/main-line.png'
class Main extends Component {
  render() {
    return (
      <AuthConsumer>
        {
          ({ state }) => (
            <div className="main-container">
              <Nav />
              <div className="main-header">

                <div className="main-header-text">
                  나에게 딱 맞는 <span style={{ color: '#eb6958' }}>룸메이트</span>를 <br />
                  찾아보세요.
                </div>
                <div className="main-header-description">
                  나와 메이트의 카드를 비교하여 쉽게 매칭정도를 알려드려요!
                </div>
                <img className="illust" src={illustSittingGirls} />


              </div>
              <div className="main-search-group">
                <div className="main-search-bar">
                  <div className="main-search-bar-title">
                    <span style={{ paddingRight: '240px' }}>지역</span>
                    <span style={{ paddingRight: '341px' }}>성별</span>
                    <span>방타입</span>
                  </div>
                  <div className="main-search-bar-selectors">
                    <div>
                      <select id="rigion" name="rigion" onChange={this.handleChangeInput}>
                        <option defaultValue value="everywhere">모든위치</option>
                        <option value="seoul">서울</option>
                      </select>
                    </div>
                    <div className="main-search-bar-selector">
                      <div className="radio-tag-group">
                        <label className="radio-label"><input type="radio" name="birth-visibility" value="public" />여성</label>
                        <label className="radio-label"><input type="radio" name="birth-visibility" value="private" defaultChecked />남성</label>
                        <label className="radio-label"><input type="radio" name="birth-visibility" value="private" defaultChecked />무관</label>
                      </div>
                    </div>
                    <div className="main-search-bar-selector">
                      <select id="rigion" name="rigion" onChange={this.handleChangeInput}>
                        <option defaultValue value="everywhere">모든위치</option>
                        <option value="seoul">서울</option>
                      </select>
                    </div>
                    <div className="main-search-bar-selector">
                      <button>Search</button>
                    </div>
                  </div>


                </div>
                <div className="main-search-tag-group">
                  <div className="main-search-tag-title">
                    <div style={{ fontSize: '18px', marginBottom: '8px' }}>*설정 하시면 잘 맞는 룸메이트와 더 쉽게 매칭됩니다.</div>
                    내가 원하는 룸메
                  </div>
                  <div className="main-search-tag-selected"></div>
                  <div className="main-search-tags"></div>
                  <div className="main-matefit-info">
                    <div className="main-matefit-info-element">
                      <img className="left" src={infoLeft}></img>
                      <div>나와 맞는<br />룸메이트 찾기</div>
                    </div>
                    <img className="line" src={mainLine}></img>
                    <div className="main-matefit-info-element">
                      <div className="info-img-wrapper">
                        <img className="center" src={infoCenter}></img>
                        <div className="element-text">2094<span>명</span></div>
                      </div>
                      <div>MateFit! 이용자 수</div>
                    </div>
                    <img className="line" src={mainLine}></img>
                    <div className="main-matefit-info-element">
                      <div className="info-img-wrapper">
                        <img className="right" src={infoRight}></img>
                        <div className="element-text">149<span>명</span></div>
                      </div>
                      <div>메이트를 만난<br />이용자 수</div>
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