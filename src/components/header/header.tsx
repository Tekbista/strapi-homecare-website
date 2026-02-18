import React from 'react';
import './header.css';
import { Header as HeaderType } from '../../models/home-page';
import { ReactSVG } from 'react-svg';


const Header: React.FC<HeaderType> = ({ id, brand, logo, bgColor }) => {
  const baseUrl = process.env.REACT_APP_STRAPI_BASE_URL || "http://localhost:1337";
  return (
    <div className="header" style={{ backgroundColor: bgColor }}>
        <div className="header-brand">
          <ReactSVG
            src={`${baseUrl}${logo.url}`}
            beforeInjection={(svg) => {
              svg.setAttribute("fill", "white");   // Change color here
              svg.setAttribute("width", "48");
              svg.setAttribute("height", "48");
            }}
          />
        </div>
        <div className="header-title">{brand}</div>
       
    </div>
  );
};

export default Header;
