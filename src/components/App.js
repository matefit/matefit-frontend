import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Intro, Signup, Main, Upload, Search, SearchDetail,MyBookmark,MyReceive,MySent,MatchedMate } from 'components';
import { AuthProvider } from 'contexts/auth';
import { KakaoAppKey } from 'config';
import 'styles/App.scss';

const Kakao = window.Kakao;

/* Login이 Token 방식일 때를 가정하여 만든 PrivateRoute */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      !localStorage.getItem('access_token') ? 
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
        : <Component {...props} />
    )} />
  )
}

function App() {
  useEffect(() => {
    Kakao.init(KakaoAppKey)
  })

  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Intro} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/main" component={Main} />
        <Route path="/upload" component={Upload} />
        <Route exact path="/search" component={Search} />
        <Route path="/search/detail" component={SearchDetail} />
        <Route path="/mypage/bookmark" component={MyBookmark} />
        <Route path="/mypage/receive" component={MyReceive} />
        <Route path="/mypage/sent" component={MySent} />
        <Route path="/mypage/matched" component={MatchedMate} />
      </Router>
    </AuthProvider>
  );
}

export default App;
