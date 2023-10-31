import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  isError: boolean;
}

class ErrorBoundaryElem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isError: false,
    } as State;
  }

  componentDidCatch() {
    this.setState({
      isError: true,
    });
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return <p>Opps! Something went wrong</p>;
    }

    return children;
  }
}

export default ErrorBoundaryElem;
