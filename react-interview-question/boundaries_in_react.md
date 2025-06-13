# question: what are error boundaries in react?

answer:

- error boundaries are components that catch javascript errors in their child component tree, log those errors, and display a fallback ui instead of crashing the whole app.
- they are implemented using the componentDidCatch lifecycle method and the getDerivedStateFromError static method.
- example:

```code
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
      this.state = {hasError: false};
   }
   static getDerivedStateFromError(error) {
    return {hasError: true};
   }
   componentDidCatch(error, errorInfo) {
    console.error("error caught:", error, errorInfo);
   }
   render() {
    if (this.state.hasError) {
      return <h1>something went wrong.</h1>;  }
      return this.props.children;
     }
    }

```

### when and why error boundaries

- when you want to prevent your entire react app from crashing due to an uncaught error in a subtree
- why to isolate faults: error boundaries catch exceptions during rendering, lifecycle methods, and constructors of their children, allowing you to display a user-friendly fallback ui instead of a blank screen

- when you need to log or report component errors centrally
- why componentDidCatch gives you access to error details and stack information so you can integrate with logging or monitoring services

- when you have parts of your ui that are less critical or more error-prone (e.g., third-party widgets, complex interactive components)
- why wrapping only those sections in an error boundary keeps the rest of the app running smoothly even if one part fails

- when you’re shipping to production and want robust user experience
- why error boundaries improve resilience by gracefully degrading functionality and maintaining overall app integrity rather than letting uncaught errors bubble up to the root render.
