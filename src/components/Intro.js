import React, { Component } from 'react';
import { useAuth } from 'contexts/auth';
import 'styles/Intro.scss';

class Intro extends Component {
  render () {
    return (
      <div className="intro-container">
        <h2>나에게 맞는 룸메이트를 Mate fit!</h2>
        <p>당신의 정보카드를 만들어<br/>당신과 맞는 룸메이트를 찾아보세요.</p>
        <button onClick={this.props.kakaoLogin}>
          <img src="./img/kakao_account_login_btn_medium_narrow.png" alt="카카오 로그인" />
        </button>
      </div>
    );
  }
}

export default useAuth(Intro);