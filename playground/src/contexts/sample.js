import React, { Component, createContext } from 'react'

const Context = createContext();
const { Provider, Consumer: SampleConsumer } = Context;

export default class SampleConsumer extends Component {
  state = {
    value: '기본값입니다'
  }

  action = {
    setValue: (value) => {
      this.setState({value}); 
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
