# question: what is lazy loading in react?

answer:

- lazy loading is a technique used to load components or resources only when they are needed, rather than at the initial load time.
- this can improve performance by reducing the initial bundle size and speeding up the loading of the application.
- example:

```code
const LazyComponent = React.lazy(() =>
  import("./LazyComponent"));

  function App() {
     return (
      <React.Suspense fallback={<div>loading...</div>}>
         <LazyComponent />
      </React.Suspense> ); }
```

### when & why to use lazy loading

- when you have large components or feature routes that users may not visit on their first load
- why to reduce the size of your initial bundle and improve first paint and time-to-interactive

- when implementing route-based code splitting (e.g., pages in a single-page app)
- why to load each route’s code only when the user navigates there, speeding up navigation and conserving bandwidth

- when you include heavy third-party libraries or rarely used widgets
- why to avoid bundling seldom-used code into the main bundle and only fetch it on demand

- when you want to optimize performance on slow networks or devices
- why to lower memory and cpu pressure by loading fewer resources up front

- when you need to show a fallback ui (spinner, skeleton) while waiting for code or data
- why suspense makes it easy to provide a loading state, improving user experience during the fetch phase
