import MyContext from "./MyContext.js";
import { useContext } from "react";

const Child = () => {
  const name = useContext(MyContext);

  return (
    <>
      {/* display the name using useContext */}
      <h1>{name}</h1>

      {/* alternative way to access the context value using MyContext.Consumer
      <MyContext.Consumer>
        {(value) => <h2>consumer value: {value}</h2>}
      </MyContext.Consumer> */}
    </>
  );
};

export default Child;
