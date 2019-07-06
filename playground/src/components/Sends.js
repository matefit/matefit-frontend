import React, { Component } from 'react'

export default class Sends extends Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({input: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange}/>
        <button type="submit">설정</button>
      </form>
    )
  }
}
