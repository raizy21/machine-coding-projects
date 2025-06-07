const CategoryFilter = ({ selectedCategory, handleSelectCategory }) => {
  return (
    <div className="filter-container">
      <label>filter by category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => handleSelectCategory(e.target.value)}
      >
        <option value="all">all categories</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
