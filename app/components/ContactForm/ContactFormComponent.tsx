import React, { useEffect } from "react";
import "./ContactFormStyles.scss";
import { Container } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="contactFormContainer">
      <img
        src="https://www.coronatours.ru/media/cache/e0/ab/e0abb66bc67748bf45c23e45161478a0.jpg"
        alt="contact form bg"
      ></img>
      <Container maxWidth="md" className="innerContainerContainerForm">
        <h2 data-aos="fade-down" data-aos-delay="300">
          Сохраните свои <span className="pinkTextSpan">нервы </span>и{" "}
          <span className="pinkTextSpan">время</span>, Запишитесь прямо сейчас!
        </h2>
        <div
          className="horizontalSeparatorVer2"
          data-aos="fade-down"
          data-aos-delay="500"
        ></div>
        <Container
          maxWidth="sm"
          className="formHolder"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          <h3>
            Закажите услуги <span className="pinkTextSpan">Сакуры</span> со
            скидкой
            <span className="pinkTextSpan"> 10%</span> только сегодня!
          </h3>
          <form>
            <div>
              <label htmlFor="name">Ваше имя:</label>
              <input
                type="text"
                placeholder="Введите ваше имя"
                name="name"
                required={true}
              />
            </div>
            <div>
              <label htmlFor="phone">Ваш телефон:</label>
              <input
                type="tel"
                placeholder="Введите ваш телефон"
                name="phone"
                required={true}
              />
            </div>
            <div>
              <label htmlFor="service">Интересующая вас услуга:</label>
              <select name="service" required={true}>
                <option value="">Выберите услугу...</option>
                <option value="Пруды">Пруды</option>
                <option value="Фонтаны">Фонтаны</option>
                <option value="Водоёмы">Водоёмы</option>
                <option value="Обслуживание">Обслуживание</option>
              </select>
            </div>
            <button type="submit">Заказать проект</button>
          </form>
        </Container>
      </Container>
    </div>
  );
};

export default ContactForm;
