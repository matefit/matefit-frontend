import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Intro, Signup, Main, Upload, Search, SearchDetail, MyBookmark, MyReceive, MySent, MatchedMate, MyInfo } from 'components';
import { AuthProvider } from 'contexts/auth';
import { KakaoAppKey } from 'config';
import 'styles/App.scss';
import { transitions, positions, types, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  type: types.SUCCESS,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const Kakao = window.Kakao;

/* Login이 Token 방식일 때를 가정하여 만든 Route */
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
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Route exact path="/" component={Intro} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/main" component={Main} />
          <Route path="/upload" component={Upload} />
          <Route exact path="/search" component={Search} />
          <Route path="/search/detail" component={SearchDetail} />
          <Switch>
            <Redirect from="/mypage" to="/mypage/bookmark" />
          </Switch>
          <Route path="/mypage/bookmark" component={MyBookmark} />
          <Route path="/mypage/receive" component={MyReceive} />
          <Route path="/mypage/sent" component={MySent} />
          <Route path="/mypage/matched" component={MatchedMate} />
          <Route path="/mypage/info" component={MyInfo} />
        </Router>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
