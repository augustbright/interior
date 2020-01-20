import React from "react";
import styled from 'styled-components';

const StyledSection = styled.section`
    background-color: ${props => props.theme.darkBG};
    background-image: url(./img/contact-bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export default class ContactUs extends React.Component {
  render() {
    return (
      <StyledSection className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center text-shadow">
              <h2 className="section-heading text-uppercase text-light">Напишите нам</h2>
              <h3 className="section-subheading text-light">
                Будем рады ответить на любой ваш вопрос!
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
                        placeholder="Ваше Имя *"
                        required
                        data-validation-required-message="Пожалуйста, укажите Ваше имя."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Ваш Email *"
                        required
                        data-validation-required-message="Пожалуйста, укажите Ваш email."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Ваш Телефон *"
                        required
                        data-validation-required-message="Пожалуйста, укажите Ваш номер телефона."
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Ваш вопрос *"
                        required
                        data-validation-required-message="Пожалуйста, введите текст сообщения."
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
                      Отправить
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
