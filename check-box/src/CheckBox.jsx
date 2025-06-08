import { useEffect, useState } from "react"; // useEffect and useState are react hooks for managing side effects and state, respectively.

const CheckBox = () => {
  const [list, setList] = useState([]); // state to hold the list of todos
  const [selectAll, setSelectAll] = useState(false); // state to manage the "select all" checkbox

  // function to fetch data from the api
  const handleApi = async () => {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
    ); // fetching the first 10 todos from the api
    response = await response.json(); // converting the response to json format
    setList(response); // updating the state with the fetched data
    console.log(response); // logging the response to the console for debugging
  };

  // useEffect hook to call handleApi when the component mounts
  useEffect(() => {
    handleApi();
  }, []);

  // function to handle the "select all" checkbox
  const handleSelectAll = () => {
    const newSelectAll = !selectAll; // toggle selectAll once
    setSelectAll(newSelectAll); // update the selectAll state

    const newList = list.map((item) => {
      return { ...item, completed: newSelectAll }; // use newSelectAll to toggle all
    });
    setList(newList);
  };

  // function to handle individual checkbox changes
  const handleCheck = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }; // toggle completion
      }
      return item; // return the rest unchanged
    });
    setList(newList);
  };

  return (
    <>
      <h1>todo list</h1>
      <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
      select all
      <ul>
        {list.map((item) => (
          <li key={item?.id}>
            <input
              type="checkbox"
              checked={item?.completed}
              onChange={() => handleCheck(item?.id)}
            />
            {item?.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CheckBox;
