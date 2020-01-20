import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

interface IPortfolioViewerProps {
  subheading: string;
  date: string;
  detail: string;
  client: string;
  category: string;
  slides: ReactImageGalleryItem[];
}

export default class PortfolioViewer extends React.Component<
  IPortfolioViewerProps
> {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="item-intro text-muted">{this.props.subheading}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <ImageGallery infinite={true} items={this.props.slides} />
            <p>{this.props.detail}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <ul className="list-inline">
              <li>Дата: {this.props.date}</li>
              <li>Клиент: {this.props.client}</li>
              <li>Категория: {this.props.category}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
