import React, { Component, createContext } from 'react'
import axios from 'axios'

const Context = createContext()
const { Provider, Consumer: AuthConsumer } = Context
const Kakao = window.Kakao

class AuthProvider extends Component {
  state = {
    kakaoToken: null
  }

  actions = {
    kakaoLogin: () => {
      // Kakao.Auth.login({
      //   success: authObj => {
      //     this.setState({
      //       kakaoToken: authObj.access_token,
      //     })
      //     console.log(authObj);
      //     localStorage.setItem('accessToken', authObj.access_token)
      //   },
      //   fail: err => {
      //     console.error(err);
      //   }
      // });
    }
  }

  render () {
    const { state, actions } = this
    const value = { state, actions }

    return (
      <Provider value={value}>
        { this.props.children }
      </Provider>  
    )
  }
}

function useAuth(WrappedComponent) {
  return function UseAuth() {
    return (
      <AuthConsumer>
        {
          ({ state, actions }) => (
            <WrappedComponent
              kakaoToken={ state.kakaoToken }
              kakaoLogin={ actions.kakaoLogin }
            />
          )
        }
      </AuthConsumer>
    )
  }
}

export {
  AuthProvider,
  AuthConsumer,
  useAuth,
}