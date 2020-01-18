import React from "react";
import CallMeButton from "./CallMeButton";

export default class Header extends React.Component {
  render() {
    return (
      <header className="masthead" id="page-top">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Создадим интерьер вашей мечты</div>
            <div className="intro-heading text-uppercase">для вашего дома</div>
            <CallMeButton
              caption="Заказать звонок"
              size="xl"
              className="shadow-sm text-uppercase"
            />
          </div>
        </div>
      </header>
    );
  }
}
