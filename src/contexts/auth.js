import React, { Component, createContext } from 'react'
import axios from 'axios'
const Context = createContext()

const { Provider, Consumer: AuthConsumer } = Context

class AuthProvider extends Component {
  state = {
    token: null
  }

  actions = {
    setToken: token => {
      axios({
        method: 'post',
        url: 'kapi.kakao.com/v1/api/talk/profile',
        Authorization: ''
      })
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
  return function UseAuth(props) {
    return (
      <AuthConsumer>
        {
          ({ state, actions }) => (
            <WrappedComponent
              token={ state.token }
              setToken={ actions.setToken }
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