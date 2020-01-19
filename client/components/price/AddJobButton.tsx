import React from "react";
import Modal from "react-modal";
import Dialog from "../Dialog";
import { IJobDefinition } from "./jobs";
import JobDefinitionItem from "./JobDefinitionItem";
import JobsListToChoose from "./JobsListToChoose";

interface IAddJobButtonProps {
  jobs: IJobDefinition[];
  onRequestAdd: (jobDefinition: IJobDefinition) => void;
}

interface IAddJobButtonState {
  isOpen: boolean;
}

export default class AddJobButton extends React.Component<
  IAddJobButtonProps,
  IAddJobButtonState
> {
  constructor(props: IAddJobButtonProps) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.open()}
          className="btn btn-info btn-default"
        >
          <i className="fa fa-plus mr-3"></i>
          Добавить работу
        </button>

        <Modal isOpen={this.state.isOpen} onRequestClose={() => this.close()}>
          <Dialog heading="Добавить работу" onRequestClose={() => this.close()}>
            <JobsListToChoose jobs={this.props.jobs} onRequestAdd={this.props.onRequestAdd}/>
          </Dialog>
        </Modal>
      </React.Fragment>
    );
  }
}
