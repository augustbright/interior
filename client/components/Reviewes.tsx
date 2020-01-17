import React from "react";
import ReviewItem from "./ReviewItem";

export default class Reviews extends React.Component {
  render() {
    return (
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Отзывы о нас</h2>
              <h3 className="section-subheading text-muted">
                Мы всегда рады получить от вас обратную связь.
              </h3>
            </div>
          </div>
          <div className="row">
            <ReviewItem
              imageUrl="img/team/1.jpg"
              name="Александра"
              project="Офис. Москва, Малая Пролетарская"
              projectUrl="#PortfolioItem01"
              message="Всё очень понравилось. Ремонт офиса выполнили быстро и качественно. Спасибо, Интериор!"
            />
            <ReviewItem
              imageUrl="img/team/2.jpg"
              name="Михаил"
              project="Детская комната"
              projectUrl="#PortfolioItem06"
              message="Возникла необходимость сделать детскую комнату вместо бывшей гостинной. Все получилось хорошо и красиво, ребенок доволен и мы тоже:)"
            />
            <ReviewItem
              imageUrl="img/team/3.jpg"
              name="Елена"
              project="Кафе. Москва, Громова 17"
              projectUrl="#PortfolioItem04"
              message="Компания Интериор занималась обустройством помещения для гостей в нашем кафе. Также они помогли нам с планировкой помещения, подбором материалов и цветов, за что им огромное спасибо!"
            />
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Мы учитываем все ваши пожелания, чтобы развиваться и становиться
                лучше. Мы рады любым вашим отзывам!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
