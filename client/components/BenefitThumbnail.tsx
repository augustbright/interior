import React, { ReactElement } from "react";

interface BenefitThumbnailProps {
  heading: string;
  subheading: string;
  image: string;
  detailURL: string;
  detailHeading: string;
  inverted?: boolean;
  buttonSize?: string;
  buttonStyle?: string;
  buttonIcon?: string;
}

export default class BenefitThumbnail extends React.Component<
  BenefitThumbnailProps
> {
  static defaultProps: BenefitThumbnailProps = {
    heading: null,
    subheading: null,
    image: null,
    detailURL: null,
    detailHeading: null,
    inverted: false,
    buttonSize: "btn-sm",
    buttonStyle: "btn-info",
    buttonIcon: "fa-arrow-right"
  };

  render() {
    const toInvert = this.props.inverted ? "timeline-inverted" : "";

    return (
      <li className={`${toInvert}`}>
        <div className="timeline-image">
          <img
            className="rounded-circle img-fluid"
            src={this.props.image}
            alt=""
          />
        </div>
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h5>{this.props.heading}</h5>
            <h6 className="subheading">{this.props.subheading}</h6>
          </div>
          <div className="timeline-body">
            <p className="text-muted">{this.props.children}</p>
          </div>
          <a
            className={`btn ${this.props.buttonSize} ${this.props.buttonStyle} mt-3`}
            href={this.props.detailURL}
          >
            {this.props.detailHeading}
            <i className={`fas ${this.props.buttonIcon} fa-inverse ml-2`}></i>
          </a>
        </div>
      </li>
    );
  }
}
