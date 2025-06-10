import ErrorBoundaries from "./ErrorBoundaries.jsx";
import Counter from "./Counter.jsx";

export default function App() {
  return (
    <ErrorBoundaries>
      <Counter />
    </ErrorBoundaries>
  );
}
