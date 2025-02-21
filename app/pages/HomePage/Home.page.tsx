import React, { useEffect } from "react";
import Header from "../../components/Header/HeaderComponents";
import { Container } from "@mui/material";
import "./MainPageStyles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AdvantagesCardInfo } from "../../assets/Advantages";

import AdvantagesCard from "../../components/AdvantagesCard/AdvantagesCardComponent";
const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

    return (
    <div>
      <Header />
      <div>
        <video
          className="video-player"
          autoPlay={true}
          disablePictureInPicture={true}
          disableRemotePlayback={true}
          loop={true}
          muted={true}
        >
          <source
            src="https://uploads-ssl.webflow.com/570118c96d89fd540a96498d/5713d0ada39927f6421c92f2_Fountain-In-Park-transcode.mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает видео.
        </video>
        <Container className="subTextOnVideo" maxWidth="md">
          <h1>
            Проектирование
            <span> садового дизайна</span> и <span>благоустройство </span>
            территории
          </h1>
          <div className="horizontalSeparator"></div>
          <p>
            Только до 30 февраля вызов специалиста совершенно{" "}
            <span>бесплатно</span>.
          </p>
          <Button variant="contained" className="callNowBtn">Заказать вызов мастера</Button>
        </Container>
      </div>
      <Container className="contentContainer">
        <h2>Преимущества работы с нами</h2>
        <div className="horizontalSeparatorVer2"></div>
      </Container>
      <Box sx={{ width: 200 }}>
      <div className="AdvantagesCardHolder">
        {AdvantagesCardInfo.map((elem, index) => {
          return (
            <AdvantagesCard
              key={index}
              iconSrc={elem.iconSrc}
              text={elem.text}
            />
          );
        })}
      </div>
    </Box>
      <div>
        <div data-aos="zoom-in">Содержимое с анимацией.</div>
      </div>
    </div>
  );
};

export default HomePage;
