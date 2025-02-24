import React, { useEffect } from "react";
import "./OurGuaranteesStyles.scss";
import { Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const OurGuarantees = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="ourGuaranteesWrapper">
      <Container maxWidth="md">
        <h2 data-aos="fade-down" data-aos-delay="300">
          Наши гарантии
        </h2>
        <div
          className="horizontalSeparatorVer2"
          data-aos="fade-down"
          data-aos-delay="500"
        ></div>
      </Container>
      <Container className="AdvantagesCardHolder">
        <div className="card" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="https://uploads-ssl.webflow.com/570118c96d89fd540a96498d/571693f58e3e79f66b32143b_VIP-64.png"
            alt="Современное оборудование"
          />
          <h4>Современное оборудование</h4>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-delay="400">
          <img
            src="https://uploads-ssl.webflow.com/570118c96d89fd540a96498d/57168e0709ecd16b4dd2c373_Customer%20Support-64.png"
            alt="Работники с высокой квалификацией"
          />
          <h4>Работники с высокой квалификацией</h4>
        </div>
        <div className="card" data-aos="zoom-in" data-aos-delay="600">
          <img
            src="https://uploads-ssl.webflow.com/570118c96d89fd540a96498d/57168d4109ecd16b4dd2c1d7_Fiber-64.png"
            alt="Качественный и быстрый результат"
          />
          <h4>Качественный и быстрый результат</h4>
        </div>
      </Container>
    </div>
  );
};

export default OurGuarantees;
