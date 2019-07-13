import React, { Component } from 'react'
import { FormCard, Nav } from 'components'
import 'styles/Signup.scss'

export default class Signup extends Component {
  state = {
    tags: [],
    selectedTags: [],
  }

  render() {
    return (
      <div className="signup-container">
        <Nav />
        <form className="signup">
          <FormCard title="회원가입 기본정보">
            <div className="basic-info">
              <div className="form-group">
                <label htmlFor="name">이름 : </label>
                <input type="text" id="name" className="form-input" />
                <label htmlFor="gender">성별 : </label>
                <select id="gender">
                  <option defaultValue value="male">남성</option>
                  <option value="female">여성</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="birth">생년월일 : </label>
                <input type="number" id="year" className="form-input" />
                /
                <input type="number" id="month" className="form-input" />
                /
                <input type="number" id="day" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일 : </label>
                <input type="text" id="email" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="residence">거주 지역 : </label>
                <input type="text" id="residence" className="form-input" />
              </div>
            </div>
          </FormCard>
          <FormCard
            title="선택사항 추가정보" 
            description="* 추가정보를 많이 할 수록 잘 맞는 룸메이트와 더 쉽게 매칭됩니다."
          >
            <div className="tag-group">
              <div className="tag selected">#비흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#비흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#비흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#비흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#비흡연</div>
              <div className="tag">#흡연</div>
              <div className="tag selected">#흡연</div>
              <div className="tag">#흡연</div>
            </div>
            <div className="selected-tag-group">
              <div className="selected-tag"></div>
            </div>
          </FormCard>
          <button>회원가입 완료</button>
        </form>
      </div>
    )
  }
}
