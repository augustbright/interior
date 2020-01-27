import React from "react";
import Page from "../components/Page";
import PriceCalculator from "../components/price/Calculator";
import defaultJobs from "../components/price/jobs";
import { withTranslation } from "../../lib/i18n";
import { WithTranslation } from "next-i18next";

interface ICalculatorProps extends WithTranslation {}

export default withTranslation()(
  class Calculator extends React.Component<ICalculatorProps> {
    render() {
      const { t } = this.props;
      return (
        <Page
          navigationShrink="on"
          navigationItems={[
            {
              heading: t("section.heading.services"),
              href: "/#services",
              spy: false
            },
            {
              heading: t("section.heading.aboutUs"),
              href: "/#benefits",
              spy: false
            },
            {
              heading: t("section.heading.ourWorks"),
              href: "/#portfolio",
              spy: false
            },
            {
              heading: t("section.heading.reviews"),
              href: "/#reviews",
              spy: false
            },
            {
              heading: t("section.heading.contacts"),
              href: "/#contact",
              spy: false
            }
          ]}
        >
          <PriceCalculator jobs={defaultJobs} />
        </Page>
      );
    }
  }
);
