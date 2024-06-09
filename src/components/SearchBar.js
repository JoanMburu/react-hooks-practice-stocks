import React from "react";

function SearchBar({ stocks, setStocks }) {
  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    let sortedStocks = [...stocks];
    if (sortBy === "Alphabetically") {
      sortedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortBy === "Price") {
      sortedStocks.sort((a, b) => a.price - b.price);
    }
    setStocks(sortedStocks);
  };

  const handleFilterChange = (event) => {
    const filterBy = event.target.value;
    if (filterBy === "All") {
      fetch("http://localhost:3001/stocks")
        .then((response) => response.json())
        .then((data) => setStocks(data));
    } else {
      fetch(`http://localhost:3001/stocks?type=${filterBy}`)
        .then((response) => response.json())
        .then((data) => setStocks(data));
    }
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

