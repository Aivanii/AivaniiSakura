import React from "react";

import { Container } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Container maxWidth="lg">
        <img
          src="../Icons/Logo.svg"
          alt="LizardRealm логотип"
          className="logo"
        />
        its header
      </Container>
    </header>
  );
};

export default Header;
