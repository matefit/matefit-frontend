import React, { Component, createContext } from 'react'

const Context = createContext()
const { Provider, Consumer: AuthConsumer } = Context

class AuthProvider extends Component {
  state = {
    kakaoToken: null
  }
  
  actions = {
    kakaoLogin: () => {
      window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=7588dfd6f7faa1279bc98bddb5501403&redirect_uri=http://52.78.115.121/oauth/kakao&response_type=code';
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