import React from 'react'

const SearchCard = ({title, position, percentage}) => {
  return (
    <div className="search-card">
      <div className="head">
        <h3>{ title }</h3>
      </div>
      <div className="body">
        <div className="card-content">
          <h4>위치</h4>
          <p>
            { position }
          </p>
        </div>
        <div className="card-content">
          <h4>나와 일치정도</h4>
          <p>
            { percentage }%
          </p>
        </div>
      </div>
    </div>
  )
}

export default SearchCard