import React from 'react'
import { Link } from 'react-router-dom'

const FormCardMain = ({ nickname, location, matching_degree }) => (
  <div className="form-card-main">
    <div className="top">
      <h2>{nickname}</h2>
    </div>
    <div className="bottom">
      <div className="content">
        <div className="content-title">위치</div>
        <div className="content-discription">{location}</div>
      </div>
      <div className="content">
        <div className="content-title">나와 일치정도</div>
        <div className="content-discription">{matching_degree}%</div>
      </div>
      
      <Link to={{
        pathname: '/search/detail',
        state: {
        }
      }}>
        <button>자세히보기</button>
      </Link>
    </div>
  </div>
)

export default FormCardMain