import React from "react";
import BenefitThumbnail from "./BenefitThumbnail";
import CallMeButton from "./CallMeButton";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../lib/i18n";

interface IBenefitsProps extends WithTranslation {}

export default withTranslation()(
  class Benefits extends React.Component<IBenefitsProps> {
    render() {
      const { t } = this.props;

      return (
        <section className="bg-light page-section" id="benefits">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {t("benefits.heading")}
                </h2>
                <h3 className="section-subheading text-muted">
                  {t("benefits.subheading")}
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <BenefitThumbnail
                    heading={t("benefits.1.heading")}
                    subheading={t("benefits.1.subheading")}
                    image="./img/about/1.jpg"
                    detailHeading={t("benefits.1.detailsHeading")}
                    detailURL="#portfolio"
                  >
                    {t("benefits.1.text.interior is a leading repairs company")}{" "}
                    <strong>{t("benefits.1.text.more than 10 years")}</strong>
                    {t("benefits.1.text.of experience")}{" "}
                    <strong>{t("benefits.1.text.more than 300 orders")}</strong>
                    .{" "}
                    {t(
                      "benefits.1.text.we know everything about repairs and we love it"
                    )}
                    .
                  </BenefitThumbnail>
                  <BenefitThumbnail
                    inverted
                    heading={t("benefits.2.heading")}
                    subheading={t("benefits.2.subheading")}
                    image="./img/about/2.jpg"
                  >
                    {t("benefits.2.text.our clients can expect")}{" "}
                    <strong>{t("benefits.2.text.high level of quality")}</strong>{" "}
                    {t("benefits.2.text.of work")}.
                  </BenefitThumbnail>
                  <BenefitThumbnail
                    heading={t("benefits.3.heading")}
                    subheading={t("benefits.3.subheading")}
                    image="./img/about/3.jpg"
                    detailHeading={t("benefits.3.detailsHeading")}
                    detailURL="#reviews"
                  >
                    {t("benefits.3.text.we believe that a cozy, beautiful and modern home repair means joy and happy life")}.
                    <br />{" "}
                    <strong>
                      {t("benefits.3.text.your thankful reviews is our best reward")}!
                    </strong>
                  </BenefitThumbnail>
                  <BenefitThumbnail
                    inverted
                    heading={t("benefits.4.heading")}
                    image="./img/about/4.jpg"
                  >
                    {t("benefits.4.text.order a call and our operator will call you as soon as possible")}.
                  </BenefitThumbnail>
                </ul>
              </div>
            </div>

            <div className="row justify-content-end mt-5">
              <div className="col-auto">
                <CallMeButton
                  caption={t("benefits.orderACall")}
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
);
