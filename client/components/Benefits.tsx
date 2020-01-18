import React from "react";
import BenefitThumbnail from "./BenefitThumbnail";
import CallMeButton from "./CallMeButton";

export default class Benefits extends React.Component {
  render() {
    return (
      <section className="bg-light page-section" id="benefits">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Почему нас выбирают?
              </h2>
              <h3 className="section-subheading text-muted">
                Вот лишь некоторые из наши преимуществ...
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <BenefitThumbnail
                  heading="Мы - профессионалы ремонта."
                  subheading="Взгялине и убедитесь сами!"
                  image="./img/about/1.jpg"
                  detailHeading="Примеры наших работ"
                  detailURL="#portfolio"
                >
                  Интериор - лидер рынке ремонта с{" "}
                  <strong>более чем 10 летним</strong> стажем, и за это время мы
                  выполнили <strong>свыше 300 работ</strong>. Мы знаем о ремонте
                  всё и любим наше дело.
                </BenefitThumbnail>
                <BenefitThumbnail
                  inverted
                  heading="Мы гарантируем качество."
                  subheading="И бесплатно устраним любые возникшие проблемы."
                  image="./img/about/2.jpg"
                  detailHeading="Подробнее о гарантии"
                  detailURL="#garanty"
                >
                  Наши клиенты могут рассчитывать на{" "}
                  <strong>высокое качество</strong> выполненных работ.
                </BenefitThumbnail>
                <BenefitThumbnail
                  heading="Наши клиенты нам благодарны."
                  subheading="И мы это ценим."
                  image="./img/about/3.jpg"
                  detailHeading="Отзывы о нас"
                  detailURL="#reviews"
                >
                  Мы верим, что уютный, красивый и современный ремонт в доме -
                  залог радости и счастливой жизни.
                  <br />{" "}
                  <strong>
                    Ваши благодарные отзывы для нас лучшая награда!
                  </strong>
                </BenefitThumbnail>
                <BenefitThumbnail
                  inverted
                  heading="Мы ждём вас!"
                  image="./img/about/1.jpg"
                >
                  Закажите звонок и наш оператор свяжется с вами в ближайшее
                  время.
                </BenefitThumbnail>
              </ul>
            </div>
          </div>

          <div className="row justify-content-end mt-5">
            <div className="col-auto">
              <CallMeButton
                caption="Заказать звонок"
                size="md"
                className="shadow-sm text-uppercase"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
