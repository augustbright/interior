import React from "react";
import PortfolioThumbnail from "./PortfolioThumbnail";

export default class Portfolio extends React.Component {
  render() {
    return (
      <section className="page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Наши работы</h2>
              <h3 className="section-subheading text-muted">
                С гордостью представляем вам некоторые из наших прошлых
                проектов.
              </h3>
            </div>
          </div>

          <div className="row">
            <PortfolioThumbnail
              heading="Офис. Москва, Малая Пролетарская"
              annotation="Ремонт помещений под нужды бизнеса в сфере услуг"
              imgSrc="img/portfolio/01-full.jpg"
              date="Август, 2017"
              detail="Заказ был очень нестандартный, но мы считаем, что получилось отлично!"
              client="Геннадий"
              category="Ремонт офисов"
              slides={[
                {
                  original: "img/portfolio/01-full.jpg",
                  thumbnail: "img/portfolio/01-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/02-full.jpg",
                  thumbnail: "img/portfolio/02-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/03-full.jpg",
                  thumbnail: "img/portfolio/03-thumbnail.jpg"
                }
              ]}
            />
            <PortfolioThumbnail
              heading="Офис. Москва, Проспект Октября"
              annotation="Капитальный ремонт и обустройство помещений с нуля"
              imgSrc="img/portfolio/02-full.jpg"
              date="Август, 2017"
              detail="Заказ был очень нестандартный, но мы считаем, что получилось отлично!"
              client="Геннадий"
              category="Ремонт офисов"
              slides={[
                {
                  original: "img/portfolio/01-full.jpg",
                  thumbnail: "img/portfolio/01-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/02-full.jpg",
                  thumbnail: "img/portfolio/02-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/03-full.jpg",
                  thumbnail: "img/portfolio/03-thumbnail.jpg"
                }
              ]}
            />
            <PortfolioThumbnail
              heading="Детский сад. Москва, Громова 42"
              annotation="Частный детский сад, капитальный ремонт детских комнат"
              imgSrc="img/portfolio/03-full.jpg"
              date="Август, 2017"
              detail="Заказ был очень нестандартный, но мы считаем, что получилось отлично!"
              client="Геннадий"
              category="Ремонт офисов"
              slides={[
                {
                  original: "img/portfolio/01-full.jpg",
                  thumbnail: "img/portfolio/01-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/02-full.jpg",
                  thumbnail: "img/portfolio/02-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/03-full.jpg",
                  thumbnail: "img/portfolio/03-thumbnail.jpg"
                }
              ]}
            />
            <PortfolioThumbnail
              heading="Кафе. Москва, Громова 17"
              annotation="Дизайн и ремонт помещения для гостей"
              imgSrc="img/portfolio/07-full.jpg"
              date="Август, 2017"
              detail="Заказ был очень нестандартный, но мы считаем, что получилось отлично!"
              client="Геннадий"
              category="Ремонт офисов"
              slides={[
                {
                  original: "img/portfolio/01-full.jpg",
                  thumbnail: "img/portfolio/01-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/02-full.jpg",
                  thumbnail: "img/portfolio/02-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/03-full.jpg",
                  thumbnail: "img/portfolio/03-thumbnail.jpg"
                }
              ]}
            />
            <PortfolioThumbnail
              heading="Частный дом. Санкт-Петербург"
              annotation="Ремонт помещений по проекту заказчика."
              imgSrc="img/portfolio/05-full.jpg"
              date="Август, 2017"
              detail="Заказ был очень нестандартный, но мы считаем, что получилось отлично!"
              client="Геннадий"
              category="Ремонт офисов"
              slides={[
                {
                  original: "img/portfolio/01-full.jpg",
                  thumbnail: "img/portfolio/01-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/02-full.jpg",
                  thumbnail: "img/portfolio/02-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/03-full.jpg",
                  thumbnail: "img/portfolio/03-thumbnail.jpg"
                }
              ]}
            />
            <PortfolioThumbnail
              heading="Детская комната"
              annotation="Дизайн и обустройство детской комнаты."
              imgSrc="img/portfolio/06-full.jpg"
              date="Август, 2017"
              detail="Заказ был очень нестандартный, но мы считаем, что получилось отлично!"
              client="Геннадий"
              category="Ремонт офисов"
              slides={[
                {
                  original: "img/portfolio/01-full.jpg",
                  thumbnail: "img/portfolio/01-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/02-full.jpg",
                  thumbnail: "img/portfolio/02-thumbnail.jpg"
                },
                {
                  original: "img/portfolio/03-full.jpg",
                  thumbnail: "img/portfolio/03-thumbnail.jpg"
                }
              ]}
            />
          </div>
        </div>
      </section>
    );
  }
}
