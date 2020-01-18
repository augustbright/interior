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
        <Navigation shrinkMode="scroll"/>
        {this.props.children}
        <ContactUs />
        <Footer />
        <style jsx global>{agencyStyles}</style>
      </ThemeProvider>
    );
  }
}
