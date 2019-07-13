import React from 'react'

const FormCard = ({ title, description, children }) => (
  <div className="form-card">
    <div className="top">
      <h2>{ title }</h2>
      <p className="description">
        { description }
      </p>
    </div>
    <div className="bottom">
      { children }
    </div>
  </div>
)

export default FormCard