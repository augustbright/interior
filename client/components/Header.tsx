import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Создадим интерьер вашей мечты</div>
            <div className="intro-heading text-uppercase">
              для вашего дома
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#services"
            >
              Позвоните мне
            </a>
          </div>
        </div>
      </header>
    );
  }
}
