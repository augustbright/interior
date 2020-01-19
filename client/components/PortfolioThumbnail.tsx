import React, { MouseEvent } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";
import Modal from "react-modal";
import Dialog from "./Dialog";
import PortfolioViewer from "./portfolio/Viewer";

interface IPortfolioThumbnailProps {
  imgSrc: string;
  heading: string;
  annotation: string;
  date: string;
  detail: string;
  client: string;
  category: string;
  slides: ReactImageGalleryItem[];
}

interface IPortfolioThumbnailState {
  isOpen: boolean;
}

export default class PortfolioThumbnail extends React.Component<
  IPortfolioThumbnailProps,
  IPortfolioThumbnailState
> {
  constructor(props: IPortfolioThumbnailProps) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onClickLink = this.onClickLink.bind(this);
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  onClickLink(event: MouseEvent) {
    event.preventDefault();
    this.open();
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-md-4 col-sm-6 portfolio-item">
          <a onClick={this.onClickLink}
          className="portfolio-link" data-toggle="modal" href="#">
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

        <Modal isOpen={this.state.isOpen} onRequestClose={() => this.close()}>
          <Dialog
            heading={this.props.heading}
            onRequestClose={() => this.close()}
            footerContent={
              <button
                onClick={() => this.close()}
                className="btn btn-primary"
                data-dismiss="modal"
                type="button"
              >
                <i className="fas fa-times mr-3"></i>
                Закрыть проект
              </button>
            }
          >
            <PortfolioViewer
              subheading={this.props.annotation}
              date={this.props.date}
              detail={this.props.detail}
              client={this.props.client}
              category={this.props.category}
              slides={this.props.slides}
            />
          </Dialog>
        </Modal>
      </React.Fragment>
    );
  }
}
