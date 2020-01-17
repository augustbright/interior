import React from "react";

interface PortfolioThumbnailProps {
  href: string;
  imgSrc: string;
  heading: string;
  annotation: string;
}

export default class PortfolioThumbnail extends React.Component<
  PortfolioThumbnailProps
> {
  render() {
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <a
          className="portfolio-link"
          data-toggle="modal"
          href={this.props.href}
        >
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-search-plus fa-3x"></i>
            </div>
          </div>
          <img
            className="img-fluid"
            src={this.props.imgSrc}
            alt={this.props.heading}
          />
        </a>
        <div className="portfolio-caption">
          <h4>{this.props.heading}</h4>
          <p className="text-muted">{this.props.annotation}</p>
        </div>
      </div>
    );
  }
}
