import React, { useEffect } from "react";
import "./OurWorksStyles.scss";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../../assets/OurWorks";
import { Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const OurWorks = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="ourWorksWrapper">
      <Container>
        <h2>Наши работы</h2>
        <div className="horizontalSeparatorVer2"></div>
      </Container>
      <Box sx={{ width: "clamp(180px, 85vw, 1740px)" }}>
        <ImageList variant="masonry" cols={3} gap={20}>
          {itemData.map((item, index) => (
            <ImageListItem key={item.img}>
              <img
                data-aos="zoom-in"
                data-aos-delay={200 * index}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <div className="photoInfo">
                <h4>{item.title}</h4>
                <div className="horizontalSeparatorVer2"></div>
                <span>{item.theme}</span>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};
export default OurWorks;
