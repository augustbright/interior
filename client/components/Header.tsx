import React, { createRef, Ref, RefObject } from "react";
import CallMeButton from "./CallMeButton";
import { withTranslation, i18n } from "../../lib/i18n";
import { WithTranslation } from "react-i18next";

interface HeaderProps extends WithTranslation {}

interface HeaderState {
  showFixedCall: boolean;
}

export default withTranslation()(
  class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
      super(props);
      this.state = {
        showFixedCall: false
      };
      this.headerRef = createRef();
    }

    scrollHandler = null;
    headerRef: RefObject<any> = null;

    componentDidMount() {
      Object.defineProperty(window, 'i18n', {value: i18n});
      const self = this;
      this.scrollHandler = function(event: Event) {
        self.setState({
          showFixedCall:
            this.scrollY >
            self.headerRef.current.offsetTop +
              self.headerRef.current.offsetHeight
        });
      };

      window.addEventListener("scroll", this.scrollHandler);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.scrollHandler);
    }

    render() {
      const t = this.props.t;
      const toShowFixedCall = this.state.showFixedCall ? "" : "call-hidden";

      return (
        <header ref={this.headerRef} className="masthead" id="page-top">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">{t("introLeadIn")}</div>
              <div className="intro-heading text-uppercase">
                {t("introHeading")}
              </div>
              <CallMeButton
                caption={t("orderACall")}
                size="xl"
                className="shadow-sm text-uppercase"
              />
              <CallMeButton
                caption=""
                size="xl"
                icon={<i className={`fas fa-phone fa-inverse`}></i>}
                className={`${toShowFixedCall} p-0 shadow call-detached d-flex justify-content-center align-items-center`}
              />
            </div>
          </div>
        </header>
      );
    }
  }
);
