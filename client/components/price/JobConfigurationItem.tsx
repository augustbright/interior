import React, { ChangeEvent } from "react";
import { IJobConfiguration } from "./jobs";

interface IJobConfigurationItemProps {
  jobConfiguration: IJobConfiguration;
  onChangeOption: (key: string, value: boolean | number) => void;
}

export default class JobConfigurationItem extends React.Component<
  IJobConfigurationItemProps
> {
  render() {
    return (
      <article>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>{this.props.jobConfiguration.definition.heading}</h3>
            </div>
          </div>
          {this.props.jobConfiguration.definition.options.map(option => {
            const value = this.props.jobConfiguration.options[option.key];
            const booleanValue = value as boolean;
            const numberValue = value as number;

            return (
              <div className="row" key={option.key}>
                <div className="col-2">{option.heading}</div>
                <div className="col-auto">
                  <input
                    type={option.type === "number" ? "text" : "checkbox"}
                    checked={booleanValue}
                    value={numberValue}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      this.props.onChangeOption(
                        option.key,
                        (option.type === 'boolean' ? Boolean : Number)(event.target[option.type === 'boolean' ? 'checked' : 'value'])
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
