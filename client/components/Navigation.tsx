import React, { UIEvent } from "react";
import ScrollSpy from "react-scrollspy";
import NavigationItem from "./NavigationItem";
import LanguageSwitch from "./LanguageSwitch";
import { WithTranslation } from "react-i18next";
import { withTranslation } from "../../lib/i18n";

export type NavigationShrinkMode = "on" | "off" | "scroll";

export interface INavigationItem {
  heading: string;
  href: string;
  spy: boolean;
}

interface NavigationProps extends WithTranslation {
  shrinkMode: NavigationShrinkMode;
  items: INavigationItem[];
}

interface NavigationState {
  shrink: boolean;
  isOpen: boolean;
}

export default withTranslation()(
  class Navigation extends React.Component<NavigationProps, NavigationState> {
    static defaultProps: NavigationProps = {
      shrinkMode: "on",
      items: [],
      i18n: null,
      t: null,
      tReady: null
    };

    scrollHandler = null;

    constructor(props) {
      super(props);
      this.state = {
        shrink: this.props.shrinkMode === "on",
        isOpen: false
      };
    }

    componentDidMount() {
      const self = this;
      this.scrollHandler = function(event: Event) {
        if (self.props.shrinkMode === "scroll") {
          self.setState({
            shrink: this.scrollY > 100
          });
        }
      };

      window.addEventListener("scroll", this.scrollHandler);
    }

    componentDidUpdate(prevProps: NavigationProps) {
      if (this.props.shrinkMode === "off") {
        this.setState({ shrink: false });
      } else if (this.props.shrinkMode === "on") {
        this.setState({ shrink: true });
      }
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollHandler);
    }

    toggle() {
      this.setState(state => ({
        isOpen: !state.isOpen
      }));
    }

    close() {
      this.setState({
        isOpen: false
      });
    }

    render() {
      const { t } = this.props;
      const toShrink = this.state.shrink ? "navbar-shrink" : "";
      const toOpen = this.state.isOpen ? "show" : "";
      const itemsToSpy = this.props.items
        .filter(item => item.spy)
        .map(item => item.href.replace("#", ""));

      return (
        <nav
          className={`navbar navbar-expand-lg fixed-top ${toShrink}`}
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="/#page-top">
              {t("title.company")}
            </a>
            <button
              onClick={() => this.toggle()}
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {t("title.menu")}
              <i className="fas fa-bars"></i>
            </button>
            <div className="d-block d-md-none">
              <LanguageSwitch />
            </div>
            <div
              className={`collapse navbar-collapse ${toOpen}`}
              id="navbarResponsive"
            >
              <ScrollSpy
                className="navbar-nav text-uppercase ml-auto"
                items={itemsToSpy}
                currentClassName="active"
              >
                {this.props.items.map(item => (
                  <NavigationItem
                    onSelected={() => this.close()}
                    key={item.heading}
                    href={item.href}
                  >
                    {item.heading}
                  </NavigationItem>
                ))}
              </ScrollSpy>
            </div>
            <div className="d-none d-md-block">
              <LanguageSwitch />
            </div>
          </div>
        </nav>
      );
    }
  }
);
