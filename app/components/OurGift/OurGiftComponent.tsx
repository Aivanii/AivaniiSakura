import React, { useEffect } from "react";
import "./OurGift.scss";
import { Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const OurGift = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="ourGiftContainerWrapper">
      <Container className="ourGiftContainer">
        <Container maxWidth="xs">
          <h2 data-aos="fade-down" data-aos-delay="300">
            Приятный бонус
          </h2>
          <div
            className="horizontalSeparatorVer2"
            data-aos="fade-down"
            data-aos-delay="500"
          ></div>
          <p data-aos="fade-down" data-aos-delay="700">
            Сделайте свой первый заказ и получите бонсай-сакуру в подарок{" "}
            <span className="pinkTextSpan">абсолютно бесплатно</span>!
          </p>
          <button data-aos="fade-down" data-aos-delay="900">
            Оставить заявку
          </button>
        </Container>

        <img
          className="photoGiftHolder"
          data-aos="fade-left"
          data-aos-delay="900"
          src="https://i.ibb.co/tpb0y7pV/68f9526ed82c48399a7ad84d-Photoroom.png"
          alt="Бонсай-сакура"
        />
      </Container>
    </div>
  );
};

export default OurGift;
