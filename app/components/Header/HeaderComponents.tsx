import React from "react";
import "./HeaderStyles.scss";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Container>
        <div className="LogoHolder">
          <div className="logoLetter">
            <span>С</span>
          </div>
          <span className="logoName">Сакура</span>
          <span className="verticalSeparator"></span>
        </div>
        <Container maxWidth="md">
          <h3>
            Студия ландшафтного дизайна в НСК
          </h3>
        </Container>
        <Container maxWidth="xs" className="phoneContainer">
          <img src = "https://uploads-ssl.webflow.com/570118c96d89fd540a96498d/571b70db86c1049c4c0d44d5_Android-32.png"
          />
          <span className="phoneSpan">8800 800 8080</span>

        </Container>
      </Container>
    </header>
  );
};

export default Header;
