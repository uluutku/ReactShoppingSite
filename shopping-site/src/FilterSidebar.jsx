import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ products, onSelectPriceRange }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterByPrice = () => {
    onSelectPriceRange({ min: parseFloat(minPrice), max: parseFloat(maxPrice) });
  };

  return (
    <div className="filter-sidebar">
      <div className="price-section">
          <h2>Filter by Price</h2>
          <div className="price-inputs">
            <label htmlFor="minPrice">Min Price:</label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="price-inputs">
            <label htmlFor="maxPrice">Max Price:</label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <button className="apply-button" onClick={handleFilterByPrice}>
            Apply
          </button>
        </div>
      </div>
      
  );
};

export default FilterSidebar;
