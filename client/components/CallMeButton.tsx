import React, { MouseEvent } from "react";
import Modal from "react-modal";
import CallMe, { Stage } from "./CallMe";
import Dialog from "./Dialog";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface CallMeButtonProps {
  caption: string;
  size: Size;
  className: string;
}

interface CallMeButtonState {
  isOpen: boolean;
  stage: Stage;
  phone: string;
  name: string;
}

const customStyle = { content: { minWidth: "50%" } };

export default class CallMeButton extends React.Component<
  CallMeButtonProps,
  CallMeButtonState
> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      stage: "input",
      phone: "",
      name: ""
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

  onClickSubmit(event: MouseEvent) {
    event.preventDefault();
    
    if (this.state.stage === "input") {
      this.setState({ stage: "pending" });
      setTimeout(() => {
        this.setState({ stage: "thanks" });
      }, 2000);
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
      <a className="btn btn-success" href="#" onClick={this.onClickSubmit}>
        {this.submitButtonContent()}
      </a>
    );
    return (
      <>
        <a
          className={`btn btn-success btn-${this.props.size} ${this.props.className}`}
          href="#"
          onClick={this.onClick}
        >
          {this.props.caption}
          <i className={`fas fa-phone fa-inverse ml-2`}></i>
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