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
    return <StyledArticle onClick={() => this.props.onSelected()}>
        {this.props.jobDefinition.heading}
    </StyledArticle>;
  }
}
