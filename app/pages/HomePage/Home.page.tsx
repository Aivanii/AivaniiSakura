import React from "react";
import Header from "../../components/Header/Header";
import CategoryPage from "../CategoryPage/Category.page";
import "./HomePageStyles.scss";

const HomePage = () => {
  return (
    <>
      <div className="headerWrapper">
        <Header />
        <div className="textWrapperContainer">
          <h1>
            LizardRealm — уникальный зооцентр экзотических животных. Здесь вы
            можете увидеть разнообразную живность, начиная от змей и заканчивая
            пауками.
          </h1>
        </div>
      </div>
      <CategoryPage />
    </>
  );
};

export default HomePage;
