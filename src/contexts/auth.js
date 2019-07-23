import React, { Component, createContext } from 'react'
import axios from 'axios'

const Context = createContext()
const { Provider, Consumer: AuthConsumer } = Context
const Kakao = window.Kakao

class AuthProvider extends Component {
  state = {
    token: null
  }
  
  actions = {
    kakaoLogin: () => {
      Kakao.Auth.login({
        success: authObj => {
          axios.post('/oauth/kakao', {
            access_token: authObj.access_token
          })
          .then(response => {
            const accessToken = response.data.access_token
            this.setState({
              token: accessToken
            })
            localStorage.setItem('access_token', accessToken)
            window.location.href = '/signup'
          })
          .catch(err => {
            console.error(err)
          })
        },
        fail: err => {
          console.error(err);
        }
      });
    },
    
    logout: () => {
      localStorage.removeItem('access_token')
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
              token={ state.token }
              kakaoLogin={ actions.kakaoLogin }
              logout={ actions.logout }
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