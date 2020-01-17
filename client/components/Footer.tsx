import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <span className="copyright">Copyright &copy; Decorzo 2019</span>
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
                      <a href="#">Политика конфиденциальности</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Пользовательское соглашение</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>        
        );
    }
}