import React, { Component } from 'react';

class Intro extends Component {
  render () {
    return (
      <div class="intro-container">
        <h2>나에게 맞는 룸메이트를 Mate fit!</h2>
        <p>당신의 정보카드를 만들어<br/>당신과 맞는 룸메이트를 찾아보세요.</p>
        <button>카카오 로그인</button>
      </div>
    );
  }
}

export default Intro;