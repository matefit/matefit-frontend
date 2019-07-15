import React, { Component } from 'react';
import { FormCard, Nav } from 'components'
import { AuthConsumer } from 'contexts/auth';
import 'styles/Main.scss'

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
                  텍스트 들어갈 예정입니다. 텍스트 들어갈 예정입니다 <br />
                  텍스트 들어갈 예정입니다!!!!!!
                </div>
                <div className="illust">
                  일러스트~
                </div>
              </div>
              <div className="main-search-group">
                <div className="main-search-bar">
                  <div className="main-search-bar-element">지역</div>
                  <div className="main-search-bar-element">성별</div>
                  <div className="main-search-bar-element">방 타입</div>
                  <button>Search</button>
                </div>
                <div className="main-search-tag-group">
                  <div className="main-search-tag-title">
                    <div style={{fontSize:'18px', marginBottom:'8px'}}>*설정 하시면 잘 맞는 룸메이트와 더 쉽게 매칭됩니다.</div>
                    내가 원하는 룸메
                  </div>
                  <div className="main-search-tag-selected"></div>
                  <div className="main-search-tags"></div>
                  <div className="main-matefit-info">
                    <div className="main-matefit-info-element"></div>
                    <div className="main-matefit-info-element"></div>
                    <div className="main-matefit-info-element"></div>

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