import React from "react";
import App from "next/app";
import { BootstrapProvider } from "@bootstrap-styled/provider/lib";
import theme from '../themes/default';
//import 'bootstrap/scss/bootstrap.scss';

export default class MyApp extends App {
  render() {
    //@ts-ignore
    const { Component, pageProps } = this.props;
    return (
        <BootstrapProvider theme={theme}>
            <Component {...pageProps} />
        </BootstrapProvider>
    );
  }
}
