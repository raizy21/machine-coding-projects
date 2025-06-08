import { useState, useEffect } from "react"; // useState and useEffect hooks from React

const Debouncing = () => {
  const [searchTerm, setSearchTerm] = useState(""); // store the search input
  const [results, setResults] = useState([]); // store search results
  const [loading, setLoading] = useState(false); // store loading state
  const [error, setError] = useState(null); // store error state

  // function to fetch qikipedia search results
  const fetchResults = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${query}`
      );
      const data = await response.json();
      setResults(data.query.search);
    } catch (error) {
      setError(error + " failed to fetch data from wikipedia.");
    } finally {
      setLoading(false);
    }
  };

  // debouncing with useEffect
  useEffect(() => {
    if (searchTerm.trim() !== "") {
      let timeout = setTimeout(() => {
        fetchResults(searchTerm);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [searchTerm]); // dependency array triggers useEffect whenever searchTerm changes

  // handle input change and update searchTerm
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // update searchTerm state with input value
  };

  return (
    <div className="search-container">
      <h1>debouncing example</h1>

      {/* search input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="type to search for animals, birds, flowers, cities..."
        className="search-bar"
      />

      {/* loading and error handling */}
      {loading && <p>loading results...</p>}
      {error && <p className="error">{error}</p>}

      {/* display search results */}
      <div className="results-list">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item.pageid} className="result-card">
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
              <a
                href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                read more
              </a>
            </div>
          ))
        ) : (
          <p>no results found.</p>
        )}
      </div>
    </div>
  );
};

export default Debouncing;
