import React from "react";
import ReviewItem from "./ReviewItem";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../lib/i18n";

interface IReviewsProps extends WithTranslation {}

export default withTranslation()(
  class Reviews extends React.Component<IReviewsProps> {
    render() {
      const { t } = this.props;

      return (
        <section className="bg-light page-section" id="reviews">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {t("reviews.heading")}
                </h2>
                <h3 className="section-subheading text-muted">
                  {t("reviews.subheading")}
                </h3>
              </div>
            </div>
            <div className="row">
              <ReviewItem
                imageUrl="img/team/1.jpg"
                name={t("reviews.1.name")}
                project={t("reviews.1.project")}
                projectUrl="#PortfolioItem01"
                message={t("reviews.1.message")}
              />
              <ReviewItem
                imageUrl="img/team/2.jpg"
                name={t("reviews.2.name")}
                project={t("reviews.2.project")}
                projectUrl="#PortfolioItem06"
                message={t("reviews.2.message")}
              />
              <ReviewItem
                imageUrl="img/team/3.jpg"
                name={t("reviews.3.name")}
                project={t("reviews.3.project")}
                projectUrl="#PortfolioItem04"
                message={t("reviews.3.message")}
              />
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                {t("reviews.outro")}
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
);
