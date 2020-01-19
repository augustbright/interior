import React, { UIEvent } from "react";
import ScrollSpy from "react-scrollspy";
import NavigationItem from "./NavigationItem";

export type NavigationShrinkMode = "on" | "off" | "scroll";

export interface INavigationItem {
  heading: string;
  href: string;
  spy: boolean;
}

interface NavigationProps {
  shrinkMode: NavigationShrinkMode;
  items: INavigationItem[];
}

interface NavigationState {
  shrink: boolean;
}

export default class Navigation extends React.Component<
  NavigationProps,
  NavigationState
> {
  static defaultProps: NavigationProps = {
    shrinkMode: "on",
    items: []
  };

  scrollHandler = null;

  constructor(props) {
    super(props);
    this.state = {
      shrink: this.props.shrinkMode === "on"
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

  render() {
    const toShrink = this.state.shrink ? "navbar-shrink" : "";
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
            Интериор
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Меню
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ScrollSpy
              className="navbar-nav text-uppercase ml-auto"
              items={itemsToSpy}
              currentClassName="active"
            >
              {this.props.items.map(item => (
                <NavigationItem key={item.heading} href={item.href}>
                  {item.heading}
                </NavigationItem>
              ))}
            </ScrollSpy>
          </div>
        </div>
      </nav>
    );
  }
}
