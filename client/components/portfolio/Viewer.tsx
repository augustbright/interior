import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../lib/i18n";

interface IPortfolioViewerProps extends WithTranslation {
  subheading: string;
  date: string;
  detail: string;
  client: string;
  category: string;
  slides: ReactImageGalleryItem[];
}

export default withTranslation()(
  class PortfolioViewer extends React.Component<IPortfolioViewerProps> {
    render() {
      const {t} = this.props;

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
                <li>{t("portfolio.viewer.date")}: {this.props.date}</li>
                <li>{t("portfolio.viewer.client")}: {this.props.client}</li>
                <li>{t("portfolio.viewer.category")}: {this.props.category}</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
);
