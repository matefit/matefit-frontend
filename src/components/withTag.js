import React, { Component } from 'react'

const withTag = () => WrappedComponent => {
  return class extends Component {
    state = {
      // 1. 흡연
      // 2. 애완 동물
      // 3. 직장인
      // 4. 학생
      // 5. 코골이
      // 6. 아침형 인간
      // 7. 야행성
      // 8. 야식
      // 9. 조용한 사람
      // 10. 사교적인 사람
      tags: [
        "흡연",
        "애완동물",
        "직장인",
        "학생",
        "코골이",
        "아침형 인간",
        "야행성",
        "야식",
        "조용한 사람",
        "사교적인 사람",
      ]
    }

    render () {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default withTag