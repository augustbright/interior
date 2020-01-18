import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="masthead" id="page-top">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Создадим интерьер вашей мечты</div>
            <div className="intro-heading text-uppercase">
              для вашего дома
            </div>
            <a
              className="shadow-sm btn btn-success btn-xl text-uppercase js-scroll-trigger"
              href="#services"
            >
              Заказать звонок
              <i className={`fas fa-phone fa-inverse ml-2`}></i>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
