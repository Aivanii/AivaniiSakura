import React from "react";
import "./HeaderStyles.scss";

const Header = () => {
  return (
    <header>
      <div className="LogoHolder">
        <div className="logoLetter">
          <span>С</span>
        </div>
        <span className="separator"></span>
        <h1 className="logoName">Сакура</h1>
      </div>
    </header>
  );
};

export default Header;
