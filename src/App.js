import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Login, Main } from './components';
import './styles/App.scss';

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
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/main" component={Main} />
    </BrowserRouter>
  );
}

export default App;
