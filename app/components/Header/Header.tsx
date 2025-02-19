import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import "./headerStyles.scss";

const Header = () => {
  return (
    <header>
      <Container maxWidth="xl" className="navWrapper">
        <img
          src="https://pouch.jumpshare.com/preview/SNvxnOuqblEzErVyDPLco8v-rEI5HVaPGs-eMph9uOVlUoi0wjF-KRXoAAN7kevphuVJwxOQlYHnGJOIp6yI9aojJft7Xm2bK7TYMCegkXI"
          alt="LizardRealm"
          className="logo"
        />
        <Container maxWidth="lg" className="centerItemsIn">
          <nav>
            <ul>
              <NavLink key="HomePage" to="/">
                <li>Главная</li>
              </NavLink>
              <NavLink key="PetsPage" to="/zhivotnye">
                <li>Животные</li>
              </NavLink>
              <NavLink key="GoodsPage" to="/tovari">
                <li>Товары</li>
              </NavLink>
              <NavLink key="AboutPage" to="/o-nas">
                <li>О нас</li>
              </NavLink>
              <NavLink key="ContactsPage" to="/contacti">
                <li>Контакты</li>
              </NavLink>
            </ul>
          </nav>
        </Container>
        <Container maxWidth="sm" className="centerItemsIn ContainerSubInfo">
          <div className="centerItemsIn">
            <span>8 (800) 345-54-12</span>
          </div>
          <div className="centerItemsIn">
            <span>Ежедневно с 9 до 17</span>
          </div>
        </Container>
      </Container>
    </header>
  );
};

export default Header;
