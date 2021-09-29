import React, { Component } from "react";
import GeneralErrorPage from "components/GeneralErrorPage/GeneralErrorPage";

const RootComponentErrorBoundary = MyComponent =>
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props);

      this.state = {
        crashedComponent: false
      };
    }

    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        crashedComponent: true
      });
      // You can also log error messages to an error reporting service here
    }

    render() {
      if (this.state.crashedComponent) {
        // Error render
        return <GeneralErrorPage />;
      }
      // Normally, just render children
      return <MyComponent {...this.props} />;
    }
  };

export default RootComponentErrorBoundary;
