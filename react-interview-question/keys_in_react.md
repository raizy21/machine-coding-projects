# question: what are keys in react?

answer:

- keys are unique identifiers assigned to elements in a list to help react identify which items have changed, been added, or removed.
- using keys improves performance during re-renders by allowing react to efficiently update the ui.
- example:

```code
const items = ["apple", "banana", "cherry"];
const listItems = items.map((item, index) => <li key={index}>{item}  </li>);
```

### when and keys in react

- when rendering lists of elements (e.g. via array.map) so that each sibling has a stable identity
- when list items can be added, removed, or reordered dynamically

- whenever a component in a list holds its own state (e.g. input values, animations), to keep that state tied to the correct item

- efficient reconciliation: keys let React match old and new elements, computing minimal dom updates instead of re-creating entire lists

- state preservation: with stable keys, react preserves component state (form inputs, focus) even if the list order changes

- avoids bugs: without keys (or with unstable keys like array indices), react may reuse the wrong dom node, leading to unexpected behavior

- performance optimization: uniquely keyed elements skip unnecessary diff checks, making re-renders faster, especially for large lists

- tip: prefer using a unique, stable identifier from your data (e.g. an id field) rather than the index, to ensure keys remain consistent across renders.
