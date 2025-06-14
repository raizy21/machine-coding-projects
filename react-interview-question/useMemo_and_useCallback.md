# question: what are the differences between useMemo and useCallback?

answer:

- useMemo:
  - returns a memoized value.
  - it is used for expensive calculations that you want to avoid recalculating on every render.
- useCallback:
  - returns a memoized function.
  - it is useful when passing callbacks to components to prevent unnecessary renders.

in summary, use useMemo for caching values and useCallback for caching functions.

### when & why to use useMemo and useCallback

- when & why to use useMemo

  - when you have an expensive calculation whose result is needed during render
  - why to avoid re-running that calculation on every render when its inputs haven’t changed, saving CPU work and keeping frame rates smooth

  - when you derive data structures (arrays, objects) inside a component that get passed down as props
  - why to maintain referential equality of those structures across renders, preventing unnecessary child updates or effect re-runs

  - when computing values used by multiple hooks (e.g. useEffect, useMemoizedValue)
  - why to ensure each hook sees the same stable value until its dependencies change

- when & why to use usecallback

  - when you’re passing a function as a prop to a child component (especially a pure/memoized one)
  - why to keep the function reference stable across renders so the child doesn’t re-render unless its actual behavior needs to change

  - when you include a callback in a hook’s dependency array (e.g. useEffect, useLayoutEffect)
  - why to avoid restarting or cleaning up effects on every render due to a newly created function identity

  - when you register event handlers, subscriptions, or external listeners inside a component
  - why to provide a consistent callback reference for adding/removing listeners, ensuring cleanup logic runs correctly and only when intended

in short, use useMemo to cache computed values and useCallback to cache functions, applying each where its memoization optimizes render behavior or dependency stability.
