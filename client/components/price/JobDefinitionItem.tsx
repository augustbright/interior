import React from "react";
import styled from 'styled-components';
import { IJobDefinition } from "./jobs";

interface IJobDefinitionItemProps {
  jobDefinition: IJobDefinition;
  onSelected: () => void
}

const StyledArticle = styled.article`
    cursor: pointer;
`;

export default class JobDefinitionItem extends React.Component<
  IJobDefinitionItemProps
> {
  render() {
    return <StyledArticle className="p-3 text-left mt-3" onClick={() => this.props.onSelected()}>
        <div className="container">
          <div className="row justify-content-space-between">
            <div className="col-12">
              <h4>{this.props.jobDefinition.heading}</h4>
            </div>
            <div className="col-auto">
              <span className="text-muted">({this.props.jobDefinition.subheading})</span>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p className="text-secondary">{this.props.jobDefinition.explanation}</p>
            </div>
          </div>
        </div>
    </StyledArticle>;
  }
}
