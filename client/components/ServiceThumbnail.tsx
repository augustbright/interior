import React from "react";

interface ServiceThumbnailProps {
  icon: string;
  heading: string;
}

export default class ServiceThumbnail extends React.Component<
  ServiceThumbnailProps
> {
  render() {
    return (
      <div className="col-md-4">
        <span className="fa-stack fa-4x">
          <i className="fas fa-circle fa-stack-2x text-primary"></i>
          <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
        </span>
        <h4 className="service-heading">{this.props.heading}</h4>
        <p className="text-muted">{this.props.children}</p>
      </div>
    );
  }
}
