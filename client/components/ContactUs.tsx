import React from "react";
import styled from "styled-components";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../lib/i18n";

interface IContactUsProps extends WithTranslation {}

const StyledSection = styled.section`
  background-color: ${props => props.theme.darkBG};
  background-image: url(./img/contact-bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export default withTranslation()(
  class ContactUs extends React.Component<IContactUsProps> {
    render() {
      const { t } = this.props;

      return (
        <StyledSection className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center text-shadow">
                <h2 className="section-heading text-uppercase text-light">
                  {t("contacts.heading")}
                </h2>
                <h3 className="section-subheading text-light">
                  {t("contacts.subheading")}
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="contactForm" name="sentMessage" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder={t("contacts.name.placeholder")}
                          required
                          data-validation-required-message={t("contacts.name.required message")}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder={t("contacts.email.placeholder")}
                          required
                          data-validation-required-message={t("contacts.email.required message")}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          placeholder={t("contacts.phone.placeholder")}
                          required
                          data-validation-required-message={t("contacts.phone.required message")}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder={t("contacts.message.placeholder")}
                          required
                          data-validation-required-message={t("contacts.message.required message")}
                        ></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        {t("contacts.send")}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </StyledSection>
      );
    }
  }
);
