import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Intro, Signup, Main } from 'components';
import { AuthProvider } from 'contexts/auth';
import 'styles/App.scss';

/* Login이 Token 방식일 때를 가정하여 만든 PrivateRoute */
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      !localStorage.getItem('token') ? 
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
        : <Component {...props} />
    )} />
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Intro} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/main" component={Main} />

      </Router>
    </AuthProvider>
  );
}

export default App;
