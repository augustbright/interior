import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Portfolio from "../components/Portfolio";
import Reviewes from "../components/Reviewes";
import ContactUs from "../components/ContactUs";
import { withTranslation } from "../../lib/i18n";
import { WithTranslation } from "next-i18next";

export default withTranslation()(
  class Index extends React.Component<WithTranslation> {
    render() {
      const { t } = this.props;
      return (
        <Page
          navigationShrink="scroll"
          navigationItems={[
            {
              heading: t("section.heading.services"),
              href: "#services",
              spy: true
            },
            {
              heading: t("section.heading.aboutUs"),
              href: "#benefits",
              spy: true
            },
            {
              heading: t("section.heading.ourWorks"),
              href: "#portfolio",
              spy: true
            },
            {
              heading: t("section.heading.reviews"),
              href: "#reviews",
              spy: true
            },
            {
              heading: t("section.heading.contacts"),
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
);
