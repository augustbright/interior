import React, { ReactElement } from "react";

interface OnRequestCloseHandler {
  (): void;
}

interface DialogProps {
  heading: string;
  footerContent?: ReactElement;
  onRequestClose: OnRequestCloseHandler;
}

export default class Dialog extends React.Component<DialogProps> {
  render() {
    const toShowFooter = this.props.footerContent ? "" : "d-none";
    return (
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title">{this.props.heading}</h4>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={this.props.onRequestClose}
          >
            &times;
          </button>
        </div>

        {/* Modal body */}
        <div className="modal-body">{this.props.children}</div>

        {/* Modal footer */}
        <div className={`${toShowFooter} modal-footer`}>
          {this.props.footerContent}
        </div>
      </div>
    );
  }
}
