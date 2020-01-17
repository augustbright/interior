import React from "react";
import Page from "../components/Page";
import Header from '../components/Header';

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <Header/>
        <div>Index page</div>
      </Page>
    );
  }
}
