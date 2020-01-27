import React, { ChangeEvent } from "react";
import { IJobConfiguration } from "./jobs";
import styled from "styled-components";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../lib/i18n";

interface IJobConfigurationItemProps extends WithTranslation {
  jobConfiguration: IJobConfiguration;
  onChangeOption: (key: string, value: boolean | number) => void;
  onRequestDelete: () => void;
}

const StyledRemoveIcon = styled.i`
  cursor: pointer;
`;

export default withTranslation()(
  class JobConfigurationItem extends React.Component<
    IJobConfigurationItemProps
  > {
    render() {
      const {t} = this.props;
      return (
        <article className="mt-4 border p-3">
          <div className="container">
            <div className="row mb-1">
              <div className="col">
                <h3>{t(this.props.jobConfiguration.definition.heading)}</h3>
              </div>
              <div className="col-1">
                <StyledRemoveIcon
                  onClick={() => this.props.onRequestDelete()}
                  className="fa fa-trash-alt text-danger"
                />
              </div>
            </div>
            {this.props.jobConfiguration.definition.options.map(option => {
              const value = this.props.jobConfiguration.options[option.key];
              const booleanValue = value as boolean;
              const numberValue = value as number;

              return (
                <div className="row mt-1" key={option.key}>
                  <div className="col-auto">{t(option.heading)}</div>
                  <div className="col-auto">
                    <input
                      type={option.type === "number" ? "text" : "checkbox"}
                      checked={booleanValue}
                      value={numberValue}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        this.props.onChangeOption(
                          option.key,
                          (option.type === "boolean" ? Boolean : Number)(
                            event.target[
                              option.type === "boolean" ? "checked" : "value"
                            ]
                          )
                        )
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      );
    }
  }
);
