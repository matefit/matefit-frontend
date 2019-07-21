import React, { Component } from 'react'
import { FormCard, Nav, Header } from 'components'
import DatePicker from "react-datepicker";
import 'styles/Upload.scss'
import "react-datepicker/dist/react-datepicker.css";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      selectedTags: [],
      startDate: new Date(),
      activateDatepicker: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.activateDatepicker = this.activateDatepicker.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  activateDatepicker = (e) => {
    this.setState({
      activateDatepicker: e.target.checked
    })
  }

  render() {
    return (
      <div className="upload-container">
        <Nav />
        <Header title="글 올리기" description={
          (<span>당신의 카드와 함께 올릴 글을 써주세요. <br />
            카드와 글을 확인하고 메이트 신청을 받을 거에요.</span>)} />
        <form className="upload">
          <FormCard title="당신이 찾는 Mate">

            <textarea className="upload-description"></textarea>

          </FormCard>
          <FormCard title="글 설정" >
            <div className="setting-container">
              <div className="setting-content-group">
                <div className="radio-tag-group">
                  <label className="subject" htmlFor="name">이름</label>
                  <label className="radio-label"><input type="radio" name="name-visibility" value="public" />공개</label>
                  <label className="radio-label"><input type="radio" name="name-visibility" value="private" defaultChecked />비공개</label>
                </div>
                <div className="radio-tag-group">
                  <label className="subject" htmlFor="birth">생년월일</label>
                  <label className="radio-label"><input type="radio" name="birth-visibility" value="public" />공개</label>
                  <label className="radio-label"><input type="radio" name="birth-visibility" value="private" defaultChecked />비공개</label>
                </div>
              </div>
              <div className="setting-content-group">
                <label className="subject" htmlFor="post-period">글 공개 기간</label>
                <div className="post-period">
                  <label><input type="checkbox" value="" name="" onClick={this.activateDatepicker} defaultChecked />룸메이트가 구해질 때까지</label>
                  {this.state.activateDatepicker ? null : <div><DatePicker selected={this.state.startDate} onChange={this.handleChange} /></div>}
                </div>
              </div>
            </div>
          </FormCard>
   
          <div className="before-check-text">
            글을 직접 작성하고 설정을 완료하였으며 <span className="before-text-highlight">당신의 카드</span>와 함께 글을 업로드 합니다.
            </div>
          <div className="before-check-radio">
            <label className="radio-label"><input type="radio" name="before-radio" value="yes" />예</label>
            <label className="radio-label"><input type="radio" name="before-radio" value="no" defaultChecked />아니오</label>
          </div>

          <button className="upload-submit">글 올리기</button>
        </form>
      </div>
    )
  }
}
