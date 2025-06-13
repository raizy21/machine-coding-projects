# question: what are higher-order components (hocs) in react?

answer:

- higher-order components are functions that take a component and return a new component, allowing for code reuse and logic sharing.
- hocs are often used for crosscutting concerns, like authentication, data fetching, or logging.
- example:

  ```code

  function withLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props}) {
      if (isLoading) {
        return <p>loading...</p>;  }
        return <Component {...props} />;
      };
    }
  ```

  - you can use it like this: const MyComponentWithLoading = withLoading(MyComponent);

### when and why hoc-s in react

- when you have shared logic or behavior that needs to be applied to multiple components
- why hocs let you abstract and reuse that logic without duplicating code or modifying each component directly

- when you need to inject additional props or callbacks (e.g. authentication status, feature flags) into a component
- why hocs wrap the original component and supply the extra data or handlers transparently

- when you want to handle cross-cutting concerns like data fetching, logging, or performance measurement
- why hocs cleanly separate those concerns from presentation components, keeping them focused on ui

- when you need to enhance third-party or library components with custom behavior
- why hocs allow you to wrap and extend components you don’t control, adapting them to your app’s needs

- when you’re implementing code-splitting or lazy loading
- why hocs can dynamically load a component on demand and handle loading/fallback states without cluttering the component itself

- when you want to maintain a clear separation of concerns and improve testability
- why hocs encapsulate side-effects and shared logic, so your base components remain pure and easier to unit-test
