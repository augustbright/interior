import React from "react";
import Navigation from "./Navigation";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import theme from "../themes/default";
import { ThemeProvider } from "styled-components";

export default class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="container-fluid">
          <Navigation />
          {this.props.children}
          <ContactUs />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}
