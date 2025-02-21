import React from "react";
import "./HeaderStyles.scss";
import { Container } from "@mui/material";
import { Link } from "@mui/icons-material";
const Header = () => {
  return (
    <header>
      <Container>
        <div className="LogoHolder">
          <div className="logoLetter">
            <span>С</span>
          </div>
          <h1 className="logoName">Сакура</h1>
          <span className="verticalSeparator"></span>
        </div>
        <Container maxWidth="md">
          <h3>
            Студия ландшафтного дизайна в НСК
          </h3>
        </Container>
      </Container>
    </header>
  );
};

export default Header;
