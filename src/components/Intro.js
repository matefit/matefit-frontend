import React, { Component } from 'react';
import { useAuth } from 'contexts/auth';
import kakaoLoginButton from 'assets/img/kakao_account_login_btn_medium_narrow.png'
import 'styles/Intro.scss';

class Intro extends Component {
  render () {
    return (
      <div className="intro-container">
        <div className="intro">
          <div className="matefit-logo">
            <div className="block top">
              <h1>Mate Fit!</h1>
            </div>
            <div className="block bottom" />
          </div>
          <h2>나에게 맞는 룸메이트를<br/>Mate fit!</h2>
          <p className="description">당신의 정보카드를 만들어<br/>당신과 맞는 룸메이트를 찾아보세요.</p>
          <img className="kakao-login-btn" src={kakaoLoginButton} alt="카카오 로그인" onClick={this.props.kakaoLogin} />
          <a href="/" className="question">질문할 것이 있으신가요?</a>
        </div>
        <footer>
          <ul className="footer-menu">
            <li>고객센터</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default useAuth(Intro);