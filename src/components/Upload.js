import React, { Component } from 'react'
import { FormCard, Nav,Header } from 'components'
import 'styles/Upload.scss'

export default class Upload extends Component {
  state = {
    tags: [],
    selectedTags: [],
  }

  render() {
    return (
      <div className="upload-container">
        <Nav />
        <Header title="글 올리기" description="qabcd"/>
        <form className="upload">
          <FormCard title="당신이 찾는 Mate">
            <div className="basic-info">
              
              
            </div>
          </FormCard>
          <FormCard title="글 설정" >
            
            <div className="selected-tag-group">
              <div className="selected-tag"></div>
            </div>
          </FormCard>
          <button>글 올리기</button>
        </form>
      </div>
    )
  }
}
