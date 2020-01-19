import React from "react";
import Page from "../components/Page";
import PriceCalculator from "../components/price/Calculator";
import defaultJobs from "../components/price/jobs";

export default class Calculator extends React.Component {
  render() {
    return (
      <Page
        navigationShrink="on"
        navigationItems={[
          {
            heading: "Услуги и цены",
            href: "/#services",
            spy: false
          },
          {
            heading: "О нас",
            href: "/#benefits",
            spy: false
          },
          {
            heading: "Наши работы",
            href: "/#portfolio",
            spy: false
          },
          {
            heading: "Отзывы",
            href: "/#reviews",
            spy: false
          },
          {
            heading: "Контакты",
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
