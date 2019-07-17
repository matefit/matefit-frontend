import React from 'react'

const FormCard = ({ title,  children }) => (
  <div className="form-card-main">
    <div className="top">
      <h2>{ title }</h2>

    </div>
    <div className="bottom">
      { children }
    </div>
  </div>
)

export default FormCard