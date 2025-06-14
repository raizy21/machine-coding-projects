# question: suspense in react

answer:

- suspense is a react feature that allows you to wait for some condition before rendering a component.
- it is often used in conjunction with lazy loading to show a fallback ui (like a loading spinner) while the lazy component is being loaded.
- example:

```code
<React.Suspense fallback={<div>loading...</div>}>
  <LazyComponent />
</React.Suspense>;
```

### when and why use suspense

- when you’re code-splitting with react.lazy
- why to declaratively show a fallback (spinner, skeleton) while the component’s bundle is being fetched, avoiding blank ui or errors during loading.

- when using suspense-enabled data-fetching libraries (e.g. relay, react-query experimental)
- why to coordinate asynchronous data loads with a single fallback boundary instead of managing manual loading/error state in each component.

- when you need to wait for multiple async dependencies before rendering a subtree
- why suspense lets react pause rendering until all promises resolve, preventing intermediate “flash of loading” and reducing layout shifts.

- when adopting react’s concurrent features (transitions, streaming ssr)
- why it signals to react which parts of the ui are low-priority and can be deferred, improving perceived responsiveness without extra boilerplate
