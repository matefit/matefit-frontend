import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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
        <PrivateRoute exact path="/signup" component={Signup} />
        <PrivateRoute path="/main" component={Main} />
        <PrivateRoute path="/upload" component={Upload} />
        <PrivateRoute exact path="/search" component={Search} />
        <PrivateRoute path="/search/detail" component={SearchDetail} />
        <Switch>
          <Redirect from="/mypage" to="/mypage/bookmark" />
        </Switch>
        <PrivateRoute path="/mypage/bookmark" component={MyBookmark} />
        <PrivateRoute path="/mypage/receive" component={MyReceive} />
        <PrivateRoute path="/mypage/sent" component={MySent} />
        <PrivateRoute path="/mypage/matched" component={MatchedMate} />
      </Router>
    </AuthProvider>
  );
}

export default App;
