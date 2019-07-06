import React, { Component, createContext } from 'react'
const Context = createContext()

const { Provider, Consumer: AuthConsumer } = Context

class AuthProvider extends Component {
  state = {
    token: null
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

export {
  AuthProvider,
  AuthConsumer,
}