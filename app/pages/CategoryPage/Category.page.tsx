import React from "react";
import { Container } from "@mui/material";
import { categoriesTitles } from "../../Assets/Categories";
import "./CategoryPageStyles.scss";
import { NavLink } from "react-router-dom";
const CategoryPage = () => {
  return (
    <main>
      <div className="categoriesWrapper">
        <Container maxWidth="lg">
          <p>
            Здесь вы можете увидеть разнообразную живность, начиная от змей и
            заканчивая пауками. В нашем центре представлены различные виды
            экзотических животных, которые удивят вас своей красотой и
            необычностью. Мы предлагаем уникальную возможность познакомиться с
            этими удивительными существами в комфортной и безопасной обстановке.
          </p>
        </Container>
        <Container maxWidth="lg">
          <h2>Выберите категорию</h2>
          <Container maxWidth="md" className="categoriesHolder flexContainer">
            {categoriesTitles.map((category) => {
              return (
                <NavLink
                  to={category.link}
                  className="categoryContainer"
                  key={category.id}
                >
                  <div>
                    <img src={category.imgSrc} alt={category.name} />
                    <h3>{category.name}</h3>
                  </div>
                </NavLink>
              );
            })}
          </Container>
        </Container>
      </div>
    </main>
  );
};

export default CategoryPage;
