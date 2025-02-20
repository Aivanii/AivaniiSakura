import React from "react";
import Header from "../../components/Header/HeaderComponents";

const HomePage = () => {
  return (
    <div>
      <Header />
      <h2>Welcome to Sakura</h2>
      <p>This is the home page.</p>
      <video className="video-player" controls>
        <source src="https://uploads-ssl.webflow.com/570118c96d89fd540a96498d/5713d0ada39927f6421c92f2_Fountain-In-Park-transcode.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};

export default HomePage;
