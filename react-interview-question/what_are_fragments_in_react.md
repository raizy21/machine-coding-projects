# question: what are fragments in react?

answer:

- fragments allow you to group multiple elements without adding extra nodes to the dom.
- they are useful for returning multiple children from a component without wrapping them in a parent element.
- you can use <Fragment> or the shorthand <> syntax.
- example:

```code
import React from "react";
   function List() {
    return (
      <>
       <h1>list of items</h1>
       <ul>
        <li>item 1</li>
        <li>item 2</li>
       </ul>
      </>
    );
   }
```

### when & why to use fragments

- when you need to return multiple sibling elements from a component
- why avoids adding extra markup that can clutter the dom or interfere with styling and layout

- when rendering lists of items where you don’t want extra wrappers around each item
- why maintains the correct html structure and prevents invalid nesting

- when composing higher-order components or render props that inject additional elements
- hy keeps the output clean and prevents unexpected styling or event behavior caused by extra dom nodes

- when optimizing for minimal dom depth
- why shallower dom trees can improve css performance and reduce the cost of dom operations during updates
