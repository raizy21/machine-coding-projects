import React from "react";

// ErrorBoundaries component that will catch errors in child components
class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // tracks if an error occurred
  }

  // if any error occurs, this method will be called
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // you can log the error info to an error reporting service if needed
  componentDidCatch(error, errorInfo) {
    console.error("error caught by error boundaries: ", error, errorInfo);
  }

  // renders fallback UI if an error is caught
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h2>something went wrong.</h2>
          <p>we are working on it!</p>
          <button onClick={() => window.location.reload()}>refresh page</button>
        </div>
      );
    }

    // otherwise, render child components
    return this.props.children;
  }
}

export default ErrorBoundaries;
