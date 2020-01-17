import React from "react";
import Page from "../components/Page";
import Header from '../components/Header';
import Services from '../components/Services';
import Benefits from '../components/Benefits';

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <Header/>
        <Services/>
        <Benefits/>
      </Page>
    );
  }
}
