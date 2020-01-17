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
                Выполним любые работы по дизайну ремонту вашего дома.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <ServiceThumbnail icon="fa-paint-brush" heading="Ремонт помещений">
              Наши лучшие специалисты готовы сделать качественный ремонт в
              короткие сроки в вашем доме или офисе.
            </ServiceThumbnail>
            <ServiceThumbnail icon="fa-laptop" heading="Дизайн интерьеров">
              Поможем воплотить ваши идеи и разработаем лучший дизайн интерьера
              под ваши условия.
            </ServiceThumbnail>
            <ServiceThumbnail
              icon="fa-comments"
              heading="Бесплатная консультация"
            >
              Мы всегда на связи и готовы предоставить вам любую помощь и
              ответить на ваши вопросы. Пишите!
            </ServiceThumbnail>
          </div>
        </div>
      </section>
    );
  }
}
