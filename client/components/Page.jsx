import React from "react";
import Navigation from "./Navigation";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import theme from "../themes/default";
import { ThemeProvider } from "styled-components";
import agencyStyles from '../styles/agency.css?type=global';
import _JSXStyle from 'styled-jsx/style';


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
        <style jsx global>{agencyStyles}</style>
      </ThemeProvider>
    );
  }
}
