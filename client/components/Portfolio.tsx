import React from "react";
import PortfolioThumbnail from "./PortfolioThumbnail";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../lib/i18n";

interface IPortfolioProps extends WithTranslation {}

export default withTranslation()(
  class Portfolio extends React.Component<IPortfolioProps> {
    render() {
      const { t } = this.props;
      return (
        <section className="page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {t("portfolio.heading")}
                </h2>
                <h3 className="section-subheading text-muted">
                  {t("portfolio.subheading")}
                </h3>
              </div>
            </div>

            <div className="row">
              <PortfolioThumbnail
                heading={t("portfolio.1.heading")}
                annotation={t("portfolio.1.annotation")}
                imgSrc="img/portfolio/01-full.jpg"
                date={t("portfolio.1.date")}
                detail={t("portfolio.1.detail")}
                client={t("portfolio.1.client")}
                category={t("portfolio.1.category")}
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
                heading={t("portfolio.2.heading")}
                annotation={t("portfolio.2.annotation")}
                imgSrc="img/portfolio/02-full.jpg"
                date={t("portfolio.2.date")}
                detail={t("portfolio.2.detail")}
                client={t("portfolio.2.client")}
                category={t("portfolio.2.category")}
                slides={[
                  {
                    original: "img/portfolio/02-full.jpg",
                    thumbnail: "img/portfolio/02-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/03-full.jpg",
                    thumbnail: "img/portfolio/03-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/04-full.jpg",
                    thumbnail: "img/portfolio/04-thumbnail.jpg"
                  }
                ]}
              />
              <PortfolioThumbnail
                heading={t("portfolio.3.heading")}
                annotation={t("portfolio.3.annotation")}
                imgSrc="img/portfolio/03-full.jpg"
                date={t("portfolio.3.date")}
                detail={t("portfolio.3.detail")}
                client={t("portfolio.3.client")}
                category={t("portfolio.3.category")}
                slides={[
                  {
                    original: "img/portfolio/03-full.jpg",
                    thumbnail: "img/portfolio/03-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/04-full.jpg",
                    thumbnail: "img/portfolio/04-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/05-full.jpg",
                    thumbnail: "img/portfolio/05-thumbnail.jpg"
                  }
                ]}
              />
              <PortfolioThumbnail
                heading={t("portfolio.4.heading")}
                annotation={t("portfolio.4.annotation")}
                imgSrc="img/portfolio/07-full.jpg"
                date={t("portfolio.4.date")}
                detail={t("portfolio.4.detail")}
                client={t("portfolio.4.client")}
                category={t("portfolio.4.category")}
                slides={[
                  {
                    original: "img/portfolio/04-full.jpg",
                    thumbnail: "img/portfolio/04-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/05-full.jpg",
                    thumbnail: "img/portfolio/05-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/06-full.jpg",
                    thumbnail: "img/portfolio/06-thumbnail.jpg"
                  }
                ]}
              />
              <PortfolioThumbnail
                heading={t("portfolio.5.heading")}
                annotation={t("portfolio.5.annotation")}
                imgSrc="img/portfolio/05-full.jpg"
                date={t("portfolio.5.date")}
                detail={t("portfolio.5.detail")}
                client={t("portfolio.5.client")}
                category={t("portfolio.5.category")}
                slides={[
                  {
                    original: "img/portfolio/05-full.jpg",
                    thumbnail: "img/portfolio/05-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/06-full.jpg",
                    thumbnail: "img/portfolio/06-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/07-full.jpg",
                    thumbnail: "img/portfolio/07-thumbnail.jpg"
                  }
                ]}
              />
              <PortfolioThumbnail
                heading={t("portfolio.6.heading")}
                annotation={t("portfolio.6.annotation")}
                imgSrc="img/portfolio/06-full.jpg"
                date={t("portfolio.6.date")}
                detail={t("portfolio.6.detail")}
                client={t("portfolio.6.client")}
                category={t("portfolio.6.category")}
                slides={[
                  {
                    original: "img/portfolio/06-full.jpg",
                    thumbnail: "img/portfolio/06-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/07-full.jpg",
                    thumbnail: "img/portfolio/07-thumbnail.jpg"
                  },
                  {
                    original: "img/portfolio/08-full.jpg",
                    thumbnail: "img/portfolio/08-thumbnail.jpg"
                  }
                ]}
              />
            </div>
          </div>
        </section>
      );
    }
  }
);
