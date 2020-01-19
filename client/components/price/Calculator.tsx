import React from "react";
import AddJobButton from "./AddJobButton";
import { IJobConfiguration, IJobDefinition } from "./jobs";
import JobConfigurationItem from "./JobConfigurationItem";

interface PriceCalculatorProps {
  jobs: IJobDefinition[];
}

interface PriceCalculatorState {
  keyCounter: number;
  chosenJobs: IJobConfiguration[];
}

export default class PriceCalculator extends React.Component<
  PriceCalculatorProps,
  PriceCalculatorState
> {
  constructor(props: PriceCalculatorProps) {
    super(props);
    this.state = {
      chosenJobs: [],
      keyCounter: 1
    };
  }
  addJob(jobDefinition: IJobDefinition) {
    const defaultOptions = jobDefinition.options.reduce((memo, value) => {
      memo[value.key] = value.defaultValue;
      return memo;
    }, {});

    this.setState(prevState => ({
      chosenJobs: [
        ...prevState.chosenJobs,
        {
          key: String(prevState.keyCounter),
          definition: jobDefinition,
          options: defaultOptions
        }
      ],
      keyCounter: prevState.keyCounter + 1
    }));
  }

  changeJobOption(jobKey: string, optionKey: string, value: boolean | number) {

    // if NaN, do nothing
    if (value !== value) {
      return;
    }

    this.setState(prevState => ({
      chosenJobs: prevState.chosenJobs.map(job => {
        if (job.key !== jobKey) {
          return job;
        }
        return {
          ...job,
          options: {
            ...job.options,
            [optionKey]: value
          }
        }
      })
    }));
  }

  getTotalPrice() {
    return this.state.chosenJobs.reduce((total, job) => {
      return total + job.definition.basePrice + job.definition.options.reduce((jobTotal, jobOption) => {
        return jobOption.effect(jobTotal, job.options[jobOption.key]);
      }, 0);
    }, 0);
  }

  render() {
    return (
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Калькулятор цен
              </h2>
              <h3 className="section-subheading text-muted">
                Выбирете интересующие вас услуги
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {this.state.chosenJobs.map(chosenJob => (
                <JobConfigurationItem
                  key={chosenJob.key}
                  jobConfiguration={chosenJob}
                  onChangeOption={(key, value) =>
                    this.changeJobOption(chosenJob.key, key, value)
                  }
                />
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <AddJobButton
                jobs={this.props.jobs}
                onRequestAdd={jobDefinition => this.addJob(jobDefinition)}
              />
            </div>
            <div className="col">
                  <h3>Итого: {this.getTotalPrice()}р.</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
