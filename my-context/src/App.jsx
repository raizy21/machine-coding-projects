import MyContext from "./MyContext.js";
import Child from "./Child.jsx";
export default function App() {
  const name = "andrei";
  return (
    <>
      <MyContext.Provider value={name}>
        <Child />
      </MyContext.Provider>
    </>
  );
}
