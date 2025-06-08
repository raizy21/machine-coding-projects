import { useState, useEffect } from "react";
import TableComponent from "./TableComponent";

const Pagination = () => {
  const [list, setList] = useState([]); //holds the data
  const [currentPage, setCurrentPage] = useState(1); //current page number
  const [rowsPerPage] = useState(10); //number of rows per page

  const indexOfLastItem = currentPage * rowsPerPage; //index of last item on current page
  const indexOfFirstItem = indexOfLastItem - rowsPerPage; //index of first item on current page

  // slice the data to get the items for the current page
  const currentItems =
    list?.users?.slice(indexOfFirstItem, indexOfLastItem) || []; //items on current page

  const totalPages = Math.ceil((list?.users?.length || 0) / rowsPerPage); //total number of pages

  //fetch data from API
  const loadData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users?limit=0");
      const data = await response.json();
      setList(data);
    } catch (error) {
      console.error("error fetching data:", error);
    }
  };

  //load data on component mount
  useEffect(() => {
    loadData();
  }, []);

  // go to previous page
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // go to next page
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // change page when clicked on page number
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1>pagination with api data</h1>
      <TableComponent currentItems={currentItems} />
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
