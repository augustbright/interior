import React from "react";

interface ReviewItemProps {
    imageUrl: string;
    name: string;
    project: string;
    projectUrl: string;
    message: string;
}

export default class ReviewItem extends React.Component<ReviewItemProps> {
  render() {
    return (
      <div className="col-sm-4">
        <div className="team-member">
          <img className="mx-auto rounded-circle" src={this.props.imageUrl} alt={this.props.name} />
          <h4>{this.props.name}</h4>
          <h5><a href={this.props.imageUrl}>{this.props.project}</a></h5>
          <p className="text-muted">{this.props.message}</p>
        </div>
      </div>
    );
  }
}
