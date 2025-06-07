import CardComponent from "./CardComponent"; // importing the CardComponent to display the fetched data
import { useState, useEffect, useCallback } from "react"; // importing necessary hooks from React

const InfiniteScroll = () => {
  const [data, setData] = useState([]); // state to hold the fetched data
  const [page, setPage] = useState(1); // state to manage the current page for pagination
  const [loading, setLoading] = useState(false); // state to manage loading status

  // fetch data from api based on current page
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
      );
      const result = await response.json();
      setData((prev) => [...prev, ...result]);
    } catch (error) {
      console.error("error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // handle infinite scroll to load more data when bottom of the page is reached
  const handleInfiniteScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight &&
      !loading
    ) {
      setPage((prev) => prev + 1);
    }
  }, [loading]);

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [handleInfiniteScroll]);

  return (
    <>
      <h1 className="app-title">infinite scroll</h1>
      <CardComponent data={data} />
      {loading && <h1 className="loading">loading...</h1>}
    </>
  );
};
export default InfiniteScroll;
