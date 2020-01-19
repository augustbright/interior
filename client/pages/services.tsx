import React from "react";
import Page from "../components/Page";
import PriceCalculator from "../components/price/Calculator";
import defaultJobs from "../components/price/jobs";

export default class Services extends React.Component {
  render() {
    return (
      <Page navigationShrink="on" navigationItems={[]}>
        <PriceCalculator jobs={defaultJobs} />
      </Page>
    );
  }
}
