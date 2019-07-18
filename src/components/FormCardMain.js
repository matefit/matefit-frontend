import React from 'react'

const FormCardMain = ({ title, children }) => (
  <div className="form-card">
    <div className="top">
      <h2>{ title }</h2>
    </div>
    <div className="bottom">
      { children }
    </div>
  </div>
)

export default FormCardMain