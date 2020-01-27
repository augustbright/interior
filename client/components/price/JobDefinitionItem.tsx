import React from "react";
import styled from 'styled-components';
import { IJobDefinition } from "./jobs";
import {WithTranslation} from 'next-i18next';
import {withTranslation} from '../../../lib/i18n';

interface IJobDefinitionItemProps extends WithTranslation {
  jobDefinition: IJobDefinition;
  onSelected: () => void
}

const StyledArticle = styled.article`
    cursor: pointer;
`;

export default withTranslation()(class JobDefinitionItem extends React.Component<
  IJobDefinitionItemProps
> {
  render() {
    const {t} = this.props;
    return <StyledArticle className="p-3 text-left mt-3" onClick={() => this.props.onSelected()}>
        <div className="container">
          <div className="row justify-content-space-between">
            <div className="col-12">
              <h4>{t(this.props.jobDefinition.heading)}</h4>
            </div>
            <div className="col-auto">
              <span className="text-muted">({t(this.props.jobDefinition.subheading)})</span>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p className="text-secondary">{t(this.props.jobDefinition.explanation)}</p>
            </div>
          </div>
        </div>
    </StyledArticle>;
  }
}
);