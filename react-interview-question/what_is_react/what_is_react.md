# what is react?

answer:

- react is an open-source javascript library developed by facebook for building user interfaces, primarily for single-page applications.
- it enables developers to create reusable ui components that manage their own state.
- react employs a declarative approach, which means you describe how the ui should look based on the current state, and react efficiently updates the ui when the state changes.
- React has the most widely adopted front-end tools in web development.
- component-based architecture - uis are built by composing small, reusable “components” (functions or classes) that encapsulate their own structure (jsx), styles, and behavior.
- jsx (javascript xml)- a syntax extension that lets you write html-like markup directly in your javascript code. under the hood, jsx is transpiled to React.createElement calls.
- virtual dom - react keeps a lightweight copy of the real dom in memory. when your app’s state changes, react computes a minimal set of dom updates by diffing the new virtual dom against the old one, then batches those changes to update the real dom efficiently.
- one-way data flow - data (“props” and component “state”) flows down the component tree, making the data flow predictable and easier to debug.

when & why to use react

- building complex, interactive uis with many distinct, reusable pieces
- projects that need highly dynamic data interactions (e.g., live feeds, dashboards)
- teams that value a declarative paradigm and component reusability
- leveraging a vast ecosystem of community libraries and third-party integrations
