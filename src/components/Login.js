import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render () {
    return (
      <div class="login-container">
        <Link to="/main">로그인</Link>
      </div>
    );
  }
}

export default Login;