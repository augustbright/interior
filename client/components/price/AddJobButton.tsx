import React from "react";
import Modal from "react-modal";
import Dialog from "../Dialog";
import { IJobDefinition } from "./jobs";
import JobsListToChoose from "./JobsListToChoose";
import { withTranslation } from "../../../lib/i18n";
import { WithTranslation } from "next-i18next";

interface IAddJobButtonProps extends WithTranslation {
  jobs: IJobDefinition[];
  onRequestAdd: (jobDefinition: IJobDefinition) => void;
}

interface IAddJobButtonState {
  isOpen: boolean;
}

export default withTranslation()(
  class AddJobButton extends React.Component<
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
      const {t} = this.props;

      return (
        <React.Fragment>
          <button
            onClick={() => this.open()}
            className="btn btn-info btn-default"
          >
            <i className="fa fa-plus mr-3"></i>
            {t("calculator.add job")}
          </button>

          <Modal isOpen={this.state.isOpen} onRequestClose={() => this.close()}>
            <Dialog
              heading={t("calculator.add job")}
              onRequestClose={() => this.close()}
            >
              <JobsListToChoose
                jobs={this.props.jobs}
                onRequestAdd={this.props.onRequestAdd}
              />
            </Dialog>
          </Modal>
        </React.Fragment>
      );
    }
  }
);
