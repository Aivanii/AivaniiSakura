import React from "react";
import "./OurGift.scss";
import { Container } from "@mui/material";

const OurGift = () => {
  return (
    <div className="ourGiftContainerWrapper">
      <Container className="ourGiftContainer">
        <Container maxWidth="xs">
          <h2>Приятный бонус</h2>
          <div className="horizontalSeparatorVer2"></div>
          <p>
            Сделайте свой первый заказ и получите бонсай-сакуру в подарок{" "}
            <span className="pinkTextSpan">абсолютно бесплатно</span>!
          </p>
          <button>Оставить заявку</button>
        </Container>

        <Container className="photoGiftHolder">
            <img
            src = "https://i.ibb.co/tpb0y7pV/68f9526ed82c48399a7ad84d-Photoroom.png"
            alt = "Бонсай-сакура"/>
        </Container>
      </Container>
    </div>
  );
};

export default OurGift;
