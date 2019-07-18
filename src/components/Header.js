import React from 'react';
import 'styles/App.scss'

const Header = ({ title, description }) => (
  <div className="header">
    <div className="header-container">
      <div className="header-title">
        {title}
      </div>
      <div className="header-content">
        {description}
      </div>
    </div>
  </div>
);



export default Header;