// FilterSidebar.jsx

import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ onSelectPriceRange, onSelectRating, onSelectDiscount }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [minRating, setMinRating] = useState(0.0); 
  const [minDiscount, setMinDiscount] = useState(0);

  const handleFilterByPrice = () => {
    onSelectPriceRange({ min: minPrice, max: maxPrice });
  };

  const handleFilterByRating = () => {
    onSelectRating(minRating);
  };

  const handleFilterByDiscount = () => {
    onSelectDiscount(minDiscount);
  };

  return (
    <div className="filter-sidebar">
      <div className="price-section">
        <h2>Filter by Price</h2>
        <div className="price-slider">
          <label htmlFor="priceRange">Price Range:</label>
          <input
            type="range"
            id="priceRange"
            value={minPrice}
            min="0"
            max="2000" 
            step="100"
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
          <span>${minPrice} - ${maxPrice}</span>
        </div>
        <button className="apply-button" onClick={handleFilterByPrice}>
          Apply Price
        </button>
      </div>

      <div className="rating-section">
        <h2>Filter by Rating</h2>
        <div className="rating-slider">
          <label htmlFor="ratingRange">Min Rating:</label>
          <input
            type="range"
            id="ratingRange"
            value={minRating}
            min="0"
            max="5"
            step="0.1"
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
          />
          <span>{minRating.toFixed(1)}</span>
        </div>
        <button className="apply-button" onClick={handleFilterByRating}>
          Apply Rating
        </button>
      </div>

      <div className="discount-section">
        <h2>Filter by Discount Percentage</h2>
        <div className="discount-slider">
          <label htmlFor="discountRange">Min Discount:</label>
          <input
            type="range"
            id="discountRange"
            value={minDiscount}
            min="0"
            max="20"
            onChange={(e) => setMinDiscount(parseInt(e.target.value))}
          />
          <span>{minDiscount}%</span>
        </div>
        <button className="apply-button" onClick={handleFilterByDiscount}>
          Apply Discount
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
