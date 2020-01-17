import React from "react";

interface NavigationProps {
  shrink?: boolean;
}

export default class Navigation extends React.Component<NavigationProps> {
  static defaultProps: NavigationProps = {
      shrink: true
  }

  render() {
    const toShrink = this.props.shrink ? "navbar-shrink" : "";
    return (
      <nav className={`navbar navbar-expand-lg ${toShrink}`} id="mainNav">
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
                  Услуги
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Примеры работ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  О нас
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
