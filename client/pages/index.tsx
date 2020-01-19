import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Portfolio from "../components/Portfolio";
import Reviewes from "../components/Reviewes";
import ContactUs from "../components/ContactUs";

export default class Index extends React.Component {
  render() {
    return (
      <Page
        navigationShrink="scroll"
        navigationItems={[
          {
            heading: "Услуги и цены",
            href: "#services",
            spy: true
          },
          {
            heading: "О нас",
            href: "#benefits",
            spy: true
          },
          {
            heading: "Наши работы",
            href: "#portfolio",
            spy: true
          },
          {
            heading: "Отзывы",
            href: "#reviews",
            spy: true
          },
          {
            heading: "Контакты",
            href: "#contact",
            spy: true
          }
        ]}
      >
        <Header />
        <Services />
        <Benefits />
        <Portfolio />
        <Reviewes />
        <ContactUs />
      </Page>
    );
  }
}
