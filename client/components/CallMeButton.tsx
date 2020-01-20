import React, { MouseEvent, ReactElement } from "react";
import Modal from "react-modal";
import CallMe, { Stage } from "./CallMe";
import Dialog from "./Dialog";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface CallMeButtonProps {
  caption: string;
  size: Size;
  className: string;
  icon?: ReactElement;
}

interface CallMeButtonState {
  isOpen: boolean;
  stage: Stage;
  phone: string;
  name: string;
  alert: string;
}

const customStyle = { content: { minWidth: "50%" } };

export default class CallMeButton extends React.Component<
  CallMeButtonProps,
  CallMeButtonState
> {
  static defaultProps = {
    icon: <i className={`fas fa-phone fa-inverse ml-2`}></i>
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      stage: "input",
      phone: "",
      name: "",
      alert: ""
    };
    this.onClick = this.onClick.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false, stage: "input" });
  }

  validateData(): boolean {
    if (this.state.phone.length === 18) {
      this.setState({alert: ''});
      return true;
    }
    this.setState({alert: 'Пожалуйста, укажите номер телефона.'});
    return false;
  }

  onClickSubmit(event: MouseEvent) {
    event.preventDefault();

    if (this.state.stage === "input") {
      if (this.validateData()) {
        this.setState({ stage: "pending" });
        setTimeout(() => {
          this.setState({ stage: "thanks" });
        }, 2000);  
      }
      return;
    }

    if (this.state.stage === "thanks") {
      this.close();
    }
  }

  submitButtonContent() {
    switch (this.state.stage) {
      case "input":
        return "Заказать";
      case "pending":
        return (
          <>
            <div className="spinner-border spinner-border-sm"></div>
          </>
        );
      case "thanks":
        return "Спасибо!";
      default:
        return "Готово";
    }
  }

  render() {
    const footer = (
      <React.Fragment>
        <span className="text-danger col">{this.state.alert}</span>
        <a className="btn btn-success" href="#" onClick={this.onClickSubmit}>
          {this.submitButtonContent()}
        </a>
      </React.Fragment>
    );
    return (
      <>
        <a
          className={`btn btn-success btn-${this.props.size} ${this.props.className}`}
          href="#"
          onClick={this.onClick}
        >
          {this.props.caption}
          {this.props.icon}
        </a>
        <Modal
          style={customStyle}
          isOpen={this.state.isOpen}
          onRequestClose={() => this.close()}
        >
          <Dialog
            heading="Заказать обратный звонок"
            onRequestClose={() => this.close()}
            footerContent={footer}
          >
            <CallMe
              stage={this.state.stage}
              name={this.state.name}
              phone={this.state.phone}
              onChangePhone={phone => this.setState({ phone })}
              onChangeName={name => this.setState({ name })}
            />
          </Dialog>
        </Modal>
      </>
    );
  }
}
