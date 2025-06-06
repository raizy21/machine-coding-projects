import { useState, useEffect } from "react"; // useState and useEffect are React hooks for managing state and side effects
const Search = () => {
  const [list, setList] = useState([]); //list to hold fetched data
  const [filteredList, setFilteredList] = useState([]); //filteredList to hold the search results
  const [search, setSearch] = useState(""); //search to hold the input value for filtering

  // function to fetch data from the api and set the list and filteredList states
  const loadData = async () => {
    let data = await fetch(
      "https://f4f31a87-b021-41fc-a580-71a3377c4d9d-00-1m0rds06vly3d.janeway.replit.dev/users"
    ); // data is fetched from the api
    data = await data.json(); // data is converted to json format
    setList(data); // set the list state with the fetched data
    setFilteredList(data); // set the filteredList state with the fetched data
  };

  // function to handle search input changes and filter the list based on the input value
  const handleSearch = (value) => {
    setSearch(value); // update the search state with the input value
    if (value === "") {
      // if the input value is empty, reset the filteredList to the original list
      setFilteredList(list); // reset filteredList to the original list
    } else {
      let filteredList = list.filter((x) => {
        return x.name.toLowerCase().includes(value.toLowerCase());
      }); // filter the list based on the input value
      setFilteredList(filteredList); // update the filteredList state with the filtered results
    }
  };

  useEffect(() => {
    loadData(); // call loadData function to fetch data when the component mounts
  }, []);

  return (
    <div className="app">
      <h1>search filter</h1>
      <input
        type="text"
        value={search}
        placeholder="enter search value"
        onChange={(e) => handleSearch(e.target.value)}
      />

      <ul>
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })
        ) : (
          <li>no data found</li>
        )}
      </ul>
    </div>
  );
};
export default Search;
