import React from "react";
import ServiceThumbnail from "./ServiceThumbnail";

export default class Services extends React.Component {
  render() {
    return (
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Услуги</h2>
              <h3 className="section-subheading text-muted">
                Мы выполним любые работы по дизайну ремонту для вашего дома.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <ServiceThumbnail icon="fa-paint-brush" heading="Ремонт помещений">
              Наши лучшие специалисты готовы сделать{" "}
              <strong>качественный ремонт</strong>{" "}в{" "}
              <strong>короткие сроки</strong> в вашем доме или офисе.
            </ServiceThumbnail>
            <ServiceThumbnail icon="fa-laptop" heading="Дизайн интерьеров">
              Поможем воплотить <strong>ваши идеи</strong> в жизнь и разработать
              для вас <strong>лучший</strong> дизайн вашего интерьера.
            </ServiceThumbnail>
            <ServiceThumbnail
              icon="fa-comments"
              heading="Бесплатная консультация"
            >
              Мы всегда на связи и готовы предоставить вам{" "}
              <strong>помощь</strong> и ответить на{" "}
              <strong>любые ваши вопросы</strong>. <br/>Пишите!
            </ServiceThumbnail>
          </div>
          <div className="row justify-content-end mt-5">
            <div className="col-auto">
              <a className="btn btn-primary btn-md" href="#services">
                Подробнее об услугах и ценах
                <span className="fa-stack fa-1x">
                  <i className="fas fa-circle fa-stack-1x text-primary"></i>
                  <i
                    className={`fas fa-arrow-right fa-stack-1x fa-inverse`}
                  ></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
