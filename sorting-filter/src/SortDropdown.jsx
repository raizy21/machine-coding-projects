const SortDropdown = ({ sortBy, handleSort }) => {
  return (
    <div className="sort-container">
      <label>sort by:</label>
      <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
        <option value="">no sorting</option>
        <option value="price">price (low to high)</option>
        <option value="rating">rating (high to low)</option>
      </select>
    </div>
  );
};

export default SortDropdown;
