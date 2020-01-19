import React from "react";
import Navigation, {
  INavigationItem,
  NavigationShrinkMode
} from "./Navigation";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import theme from "../themes/default";
import { ThemeProvider } from "styled-components";

interface PageProps {
  navigationItems: INavigationItem[];
  navigationShrink: NavigationShrinkMode;
}

export default class Page extends React.Component<PageProps> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navigation
          shrinkMode={this.props.navigationShrink}
          items={this.props.navigationItems}
        />
        {this.props.children}
        <Footer />
      </ThemeProvider>
    );
  }
}
