import { useState, useEffect } from "react"; // useState and useEffect are React hooks
import CategoryFilter from "./CategoryFilter"; // CategoryFilter component for filtering products by category
import SortDropdown from "./SortDropdown"; // SortDropdown component for sorting products by price or rating
import ProductList from "./ProductList"; // ProductList component to display the list of products

const Products = () => {
  const [productList, setProductList] = useState([]); // state to hold the list of products fetched from the API
  const [filteredList, setFilteredList] = useState([]); // state to hold the filtered list of products based on category and sorting
  const [selectedCategory, setSelectedCategory] = useState("all"); // state to hold the currently selected category for filtering
  const [sortBy, setSortBy] = useState(""); // state to hold the current sorting criteria (price or rating)

  // function to load product data from api
  const loadData = async () => {
    let data = await fetch("https://fakestoreapi.com/products"); // fetch products from the fake store api
    data = await data.json(); // parse the response as json
    setProductList(data); // set the productList state with fetched data
    setFilteredList(data); // initialize filtered list with full data
  };

  // function to handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category); // update the selected category state
    if (category === "all") {
      setFilteredList(productList); // show all products if "all" is selected
    } else {
      setFilteredList(productList.filter((x) => x.category === category)); // filter by category
    }
  };

  // function to handle sorting of products
  const handleSort = (sortCriteria) => {
    setSortBy(sortCriteria); // update the sorting criteria state
    let sortedList = [...filteredList]; // create a copy of the filtered list to sort

    // sort the products based on the selected criteria
    if (sortCriteria === "price") {
      sortedList.sort((a, b) => a.price - b.price); // sort by price
    } else if (sortCriteria === "rating") {
      sortedList.sort((a, b) => b.rating.rate - a.rating.rate); // sort by rating
    }

    setFilteredList(sortedList); // update filtered list with sorted products
  };

  useEffect(() => {
    loadData(); // fetch data on component mount
  }, []);

  return (
    <>
      <h1>product list with sorting & filtering</h1>
      <CategoryFilter
        selectedCategory={selectedCategory}
        handleSelectCategory={handleSelectCategory}
      />
      <SortDropdown sortBy={sortBy} handleSort={handleSort} />
      <ProductList productList={filteredList} />
    </>
  );
};

export default Products;
