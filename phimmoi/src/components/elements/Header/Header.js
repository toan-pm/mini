import React from "react";
import "./Header.css";
import moivelogo from "./reactMovie_logo.png";
import tmdblogo from "./tmdb_logo.png";

const Header = () => {
  return (
    <div className="rmdb-header">
    <div className="rmdb-header-content">  
        <img className="rmdb-logo" src={moivelogo} alt="rmdb-logo" />
      <img className="rmdb-tmdb-logo" src={tmdblogo} alt="tmdb-logo" />
    </div>
  </div>
  );
};

export default Header;
