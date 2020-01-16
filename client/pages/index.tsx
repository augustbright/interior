import React from "react";
import {
  Card,
  CardBlock,
  H3,
  Small,
  A,
  Strong,
  Badge,
  Code,
  Button,
  Alert
} from "@bootstrap-styled/v4";

interface IndexProps {
    title: string,
    name: string,
    theme: Record<string, any>
}

interface IndexState {
    counter: number
}

export default class Index extends React.Component<IndexProps, IndexState> {
  static async getInitialProps() {
    return {
        title: 'Hola',
        name: 'World'
    }
  }

  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }

  render() {
    const { title, name, theme } = this.props;
    const state = this.state;

    return (
      <Card>
        <CardBlock>
          <H3 className="d-inline">
            Hello <Small>{title}</Small> <Strong>{name}</Strong>, <A>you</A>,
            can add <Code>1</Code> to
          </H3>{" "}
          <Badge color="danger" pill>
            <H3>${state.counter}</H3>
          </Badge>{" "}
          <Strong>by</Strong> pressing,
          <Button onClick={() => this.setState({ counter: state.counter + 1 })}>
            here
          </Button>
          . This
          <Code>
            <Strong>module</Strong>
          </Code>{" "}
          is a basic example with a custom Bootstrap Styled theme.
          {state.counter >= 1337 && (
            <Alert color="success" className="mt-2" uncontrolled>
              {state.counter === 1337 ? "Congrats" : "We won't tell anyone"},
              now click on
              <Code>
                <Strong>VIEW CODE</Strong>
              </Code>{" "}
              button to learn how it work
            </Alert>
          )}
          {state.counter > 1500 && (
            <Alert color="warning" className="mt-2">
              Do you know the{" "}
              <Code>
                <Strong>Code snippet</Strong>
              </Code>{" "}
              can be edited in live?
            </Alert>
          )}
        </CardBlock>
      </Card>
    );
  }
}
