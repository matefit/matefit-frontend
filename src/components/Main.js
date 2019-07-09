import React, { Component } from 'react';
import { AuthConsumer } from 'contexts/auth';

class Main extends Component {
  render () {
    return (
      <AuthConsumer>
        {
          ({state}) => (
            <div className="main-container">
              메인
            </div>
          )
        }
      </AuthConsumer>
    );
  }
}

export default Main;