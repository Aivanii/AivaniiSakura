import React, {useEffect} from "react";
import "./AdvantagesCardStyles.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const AdvantagesCard = ({ iconSrc = "", text = "", index = 0}) => {
  useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="card"  
    data-aos="zoom-in"
    data-aos-delay={125 * (index+1)}>
      <img src={iconSrc} alt="" />
      <h4>{text}</h4>
    </div>
  );
};
export default AdvantagesCard;
