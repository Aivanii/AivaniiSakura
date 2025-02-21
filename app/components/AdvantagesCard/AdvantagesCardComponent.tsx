import React from "react";
import "./AdvantagesCardStyles.scss";

const AdvantagesCard = ({ iconSrc = "", text = "" }) => {
  return (
    <div className="card">
      <img src={iconSrc} alt="" />
      <h4>{text}</h4>
    </div>
  );
};
export default AdvantagesCard;
