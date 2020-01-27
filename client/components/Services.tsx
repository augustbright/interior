import React from "react";
import ServiceThumbnail from "./ServiceThumbnail";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../lib/i18n";

interface IServiceProps extends WithTranslation {}

export default withTranslation()(
  class Services extends React.Component<IServiceProps> {
    render() {
      const { t } = this.props;

      return (
        <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {t("services.heading")}
                </h2>
                <h3 className="section-subheading text-muted">
                  {t("services.subheading")}.
                </h3>
              </div>
            </div>
            <div className="row text-center">
              <ServiceThumbnail
                icon="fa-paint-brush"
                heading={t("services.repair.heading")}
              >
                {t("services.repair.text.our best specialists will make a")}{" "}
                <strong>{t("services.repair.text.nice repair")}</strong>{" "}
                {t("services.repair.text.in")}{" "}
                <strong>{t("services.repair.text.short terms")}</strong>{" "}
                {t("services.repair.text.of your home or office")}.
              </ServiceThumbnail>
              <ServiceThumbnail
                icon="fa-laptop"
                heading={t("services.design.heading")}
              >
                {t("services.design.text.we will help you implement")}{" "}
                <strong>{t("services.design.text.your ideas")}</strong>{" "}
                {t("services.design.text.and make")}{" "}
                <strong>{t("services.design.text.the best")}</strong>{" "}
                {t("services.design.text.design of your interior")}.
              </ServiceThumbnail>
              <ServiceThumbnail
                icon="fa-comments"
                heading={t("services.consulting.heading")}
              >
                {t(
                  "services.consulting.text.we are always glad to introduce you"
                )}{" "}
                <strong>{t("services.consulting.text.our help")}</strong>{" "}
                {t("services.consulting.text.and answer")}{" "}
                <strong>
                  {t("services.consulting.text.any your questions")}
                </strong>
                . <br />
                {t("services.consulting.text.call us")}!
              </ServiceThumbnail>
            </div>
            <div className="row justify-content-end mt-5">
              <div className="col-auto">
                <a className="btn btn-primary btn-md" href="/calculator">
                  {t("services.price calculator")}
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
);
