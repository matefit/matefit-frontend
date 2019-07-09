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
<<<<<<< HEAD
      axios({
        method: 'post',
        url: '/oauth/authorize?client_id=7588dfd6f7faa1279bc98bddb5501403&redirect_uri=http://localhost:3000/signup&response_type=code'
      })
=======
>>>>>>> e1a98e25d451d14449d084e46b603b68dc2441c0
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