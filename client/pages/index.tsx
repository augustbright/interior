import React from "react";
import Page from "../components/Page";
import Header from '../components/Header';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Portfolio from '../components/Portfolio';
import Reviewes from '../components/Reviewes';

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <Header/>
        <Services/>
        <Benefits/>
        <Portfolio/>
        <Reviewes/>
      </Page>
    );
  }
}
