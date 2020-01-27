import React from "react";
import AddJobButton from "./AddJobButton";
import { IJobConfiguration, IJobDefinition } from "./jobs";
import JobConfigurationItem from "./JobConfigurationItem";
import JobsListToChoose from "./JobsListToChoose";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../../lib/i18n";

type CalculatingStage = "intro" | "process";

interface PriceCalculatorProps extends WithTranslation {
  jobs: IJobDefinition[];
}

interface PriceCalculatorState {
  keyCounter: number;
  chosenJobs: IJobConfiguration[];
}

export default withTranslation()(
  class PriceCalculator extends React.Component<
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

    changeJobOption(
      jobKey: string,
      optionKey: string,
      value: boolean | number
    ) {
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
          };
        })
      }));
    }

    deleteJob(jobKey: string) {
      this.setState(prevState => ({
        chosenJobs: prevState.chosenJobs.filter(job => job.key !== jobKey)
      }));
    }

    getTotalPrice() {
      return this.state.chosenJobs.reduce((total, job) => {
        return (
          total +
          job.definition.basePrice +
          job.definition.options.reduce((jobTotal, jobOption) => {
            return jobOption.effect(jobTotal, job.options[jobOption.key]);
          }, 0)
        );
      }, 0);
    }

    getStage(): CalculatingStage {
      return this.state.chosenJobs.length ? "process" : "intro";
    }

    renderStage() {
      switch (this.getStage()) {
        case "intro":
          return this.renderIntroStage();
        case "process":
        default:
          return this.renderProcessStage();
      }
    }

    renderIntroStage() {
      const {t} = this.props;
      return (
        <React.Fragment>
          <div className="row mt-2">
            <div className="col-lg-12 text-center">
              <h3 className="section-subheading text-muted">
                {t("calculator.choose service")}
              </h3>
            </div>
          </div>

          <div className="row mt-2 justify-content-center">
            <div className="col-lg-6 text-center">
              <JobsListToChoose
                jobs={this.props.jobs}
                onRequestAdd={job => this.addJob(job)}
              />
            </div>
          </div>
        </React.Fragment>
      );
    }
    renderProcessStage() {
      const {t} = this.props;
      return (
        <React.Fragment>
          <div className="row justify-content-center">
            <div className="col-auto">
              {this.state.chosenJobs.map(chosenJob => (
                <JobConfigurationItem
                  key={chosenJob.key}
                  jobConfiguration={chosenJob}
                  onChangeOption={(key, value) =>
                    this.changeJobOption(chosenJob.key, key, value)
                  }
                  onRequestDelete={() => this.deleteJob(chosenJob.key)}
                />
              ))}
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-auto">
              <AddJobButton
                jobs={this.props.jobs}
                onRequestAdd={jobDefinition => this.addJob(jobDefinition)}
              />
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-auto">
              <h3>{t("calculator.total")}: {this.getTotalPrice()}{t("calculator.currency")}.</h3>
            </div>
          </div>
        </React.Fragment>
      );
    }

    render() {
      const {t} = this.props;
      
      return (
        <section className="page-section bg-light" id="price-calculator">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  {t("calculator.heading")}
                </h2>
              </div>
            </div>

            {this.renderStage()}
          </div>
        </section>
      );
    }
  }
);
