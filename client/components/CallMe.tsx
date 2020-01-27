import React, { ChangeEvent } from "react";
import PhoneInput from "react-phone-input-2";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../lib/i18n";

export type Stage = "input" | "pending" | "thanks";

interface OnChangePhoneHandler {
  (phone: string): void;
}

interface OnChangeNameHandler {
  (name: string): void;
}

interface CallMeProps extends WithTranslation {
  phone: string;
  name: string;
  stage: Stage;
  onChangePhone: OnChangePhoneHandler;
  onChangeName: OnChangeNameHandler;
}

export default withTranslation()(
  class CallMe extends React.Component<CallMeProps> {
    renderInputStage() {
      const { t } = this.props;

      return (
        <form>
          <div className="container-flud">
            <div className="row justify-content-center">
              <div className="col-auto">
                <p className="text-muted">
                  {t(
                    "call me.dialog.leave us your phone number and we will call you"
                  )}
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <PhoneInput
                  country={"ru"}
                  placeholder={t("call me.dialog.your phone")}
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
                  placeholder={t("call me.dialog.your name")}
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
      const { t } = this.props;
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
                {t(
                  "call me.dialog.our operator will call you as soon as possible"
                )}
                !
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
);
