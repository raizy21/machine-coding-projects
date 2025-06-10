import { lazy, Suspense } from "react";

// lazy loading the component
const LazyComponent = lazy(() => import("./LazyLoadComponent.jsx"));

export default function App() {
  return (
    <div className="App">
      <h1>lazy Loading in react</h1>
      {/* suspense component to handle the loading state */}
      <Suspense fallback={<div>loading data...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
