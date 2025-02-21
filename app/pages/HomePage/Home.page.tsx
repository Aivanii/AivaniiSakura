import React from "react";
import Header from "../../components/Header/HeaderComponents";
import { Container } from "@mui/material";
import "./MainPageStyles.scss"
const HomePage = () => {
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
        <Container className="subTextOnVideo" maxWidth="lg">
          <h1>
            Проектирование 
            <span> садового дизайна</span> и <span>благоустройство </span>
            территории
          </h1>
          <div className="horizontalSeparator"></div>
          <p>Только до 30 февраля вызов специалиста совершенно <span>бесплатно</span>.</p>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
