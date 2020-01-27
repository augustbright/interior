import React from "react";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../lib/i18n";

export default withTranslation()(
  class Footer extends React.Component<WithTranslation> {
    render() {
      const { t } = this.props;
      return (
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">
                  {t("title.copyright")} &copy; {t("title.company")} 2019
                </span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#">{t("title.privacyPolicy")}</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">{t("termsOfUse")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
    }
  }
);
