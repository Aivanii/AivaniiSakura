import React, { useEffect } from "react";
import "./CardStyles.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ iconSrc = "", text = "", index = 0 }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="card" data-aos="zoom-in" data-aos-delay={200 * (index + 1)}>
      <img src={iconSrc} alt="" />
      <h4>{text}</h4>
    </div>
  );
};
export default Card;
