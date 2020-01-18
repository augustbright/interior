import React, { UIEvent } from "react";

interface NavigationProps {
  shrinkMode: "on" | "off" | "scroll";
}

interface NavigationState {
  shrink: boolean;
}

export default class Navigation extends React.PureComponent<NavigationProps, NavigationState> {
  static defaultProps: NavigationProps = {
    shrinkMode: 'on'
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
      this.setState({shrink: false});
    } else if (this.props.shrinkMode === "on") {
      this.setState({shrink: true});
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    const toShrink = this.state.shrink ? "navbar-shrink" : "";
    return (
      <nav
        className={`navbar navbar-expand-lg fixed-top ${toShrink}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
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
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Услуги и цены
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#benefits">
                  О нас
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Наши работы
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#reviews">
                  Отзывы
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
