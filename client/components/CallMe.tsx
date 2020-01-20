import React, { ChangeEvent } from "react";
import PhoneInput from "react-phone-input-2";

export type Stage = "input" | "pending" | "thanks";

interface OnChangePhoneHandler {
  (phone: string): void;
}

interface OnChangeNameHandler {
  (name: string): void;
}

interface CallMeProps {
  phone: string;
  name: string;
  stage: Stage;
  onChangePhone: OnChangePhoneHandler;
  onChangeName: OnChangeNameHandler;
}

export default class CallMe extends React.Component<CallMeProps> {
  renderInputStage() {
    return (
      <form>
        <div className="container-flud">
          <div className="row justify-content-center">
            <div className="col-auto">
              <p className="text-muted">
                Пожалуйста, отставьте ваш номер телефона, и мы вам позвоним:
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <PhoneInput
                country={"ru"}
                placeholder="Ваш телефон *"
                onlyCountries={["ru"]}
                value={this.props.phone}
                onChange={this.props.onChangePhone}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control mt-3"
                id="usr"
                placeholder="Ваше имя"
                value={this.props.name}
                onChange={(event: ChangeEvent) =>
                  this.props.onChangeName(event.target.nodeValue)
                }
              />
            </div>
          </div>
        </div>
      </form>
    );
  }

  renderThanksStage() {
      return (
        <div className="container-flud">
          <div className="row justify-content-center my-3">
            <div className="col-auto">
              <i className="fa fa-check fa-3x text-secondary"></i>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <h5 className="text-muted">
                Наш оператор свяжется с вами в ближайшее время!
              </h5>
            </div>
          </div>
        </div>
      );
  }

  render() {
    switch (this.props.stage) {
      default:
      case "input":
        return this.renderInputStage();
      case "thanks":
        return this.renderThanksStage();
    }
  }
}
