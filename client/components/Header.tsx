import React, {createRef, Ref, RefObject} from "react";
import CallMeButton from "./CallMeButton";

interface HeaderProps {}

interface HeaderState {
  showFixedCall: boolean;
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
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
    const self = this;
    this.scrollHandler = function(event: Event) {
      self.setState({
        showFixedCall: this.scrollY > self.headerRef.current.offsetTop + self.headerRef.current.offsetHeight
      });
    };

    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  render() {
    const toShowFixedCall = this.state.showFixedCall ? "" : "call-hidden";

    return (
      <header ref={this.headerRef} className="masthead" id="page-top">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Интерьер вашей мечты</div>
            <div className="intro-heading text-uppercase">для вашего дома</div>
            <CallMeButton
              caption="Заказать звонок"
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
