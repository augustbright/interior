import React, { MouseEvent } from "react";
import Modal from "react-modal";
import CallMe from "./CallMe";

type Size = "xs" | "sm" | "md" | "lg" | "xl";

interface CallMeButtonProps {
  caption: string;
  size: Size;
  className: string;
}

interface CallMeButtonState {
  isOpen: boolean;
}

export default class CallMeButton extends React.Component<
  CallMeButtonProps,
  CallMeButtonState
> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <>
        <a
          className={`btn btn-success btn-${this.props.size} ${this.props.className}`}
          onClick={this.onClick}
        >
          {this.props.caption}
          <i className={`fas fa-phone fa-inverse ml-2`}></i>
        </a>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.setState({ isOpen: false })}
        >
          <CallMe />
        </Modal>
      </>
    );
  }
}
