import React from "react";
import JobDefinitionItem from "./JobDefinitionItem";
import { IJobDefinition } from "./jobs";

interface IJobsListToChooseProps {
  jobs: IJobDefinition[];
  onRequestAdd: (job: IJobDefinition) => void;
}

export default class JobsListToChoose extends React.Component<
  IJobsListToChooseProps
> {
  render() {
    return this.props.jobs.map(job => (
      <JobDefinitionItem
        jobDefinition={job}
        onSelected={() => {
          this.props.onRequestAdd(job);
        }}
      />
    ));
  }
}
