// ProductList.jsx

import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar.jsx';
import { useBasket } from './BasketContext';
import './ProductList.css';

const ProductList = ({ products }) => {
  const { addToBasket } = useBasket();

  const [filters, setFilters] = useState({
    category: null,
    priceRange: { min: '', max: '' },
    rating: '',
    discountPercentage: '',
  });

  const [sortOption, setSortOption] = useState('');

  const handleSelectCategory = (category) => {
    setFilters({ ...filters, category });
  };

  const handleSelectPriceRange = (priceRange) => {
    setFilters({ ...filters, priceRange });
  };

  const handleSelectRating = (rating) => {
    setFilters({ ...filters, rating });
  };

  const handleSelectDiscount = (discountPercentage) => {
    setFilters({ ...filters, discountPercentage });
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const applyFilters = (product) => {
    const { category, priceRange, rating, discountPercentage } = filters;
    const categoryFilter = !category || product.category === category;
    const priceFilter =
      !priceRange.min || !priceRange.max || (product.price >= priceRange.min && product.price <= priceRange.max);
    const ratingFilter = !rating || product.rating >= rating;
    const discountFilter = !discountPercentage || product.discountPercentage >= discountPercentage;

    return categoryFilter && priceFilter && ratingFilter && discountFilter;
  };

  const applySorting = (a, b) => {
    switch (sortOption) {
      case 'lowToHigh':
        return a.price - b.price;
      case 'highToLow':
        return b.price - a.price;
      case 'alphabeticalAsc':
        return a.title.localeCompare(b.title);
      case 'alphabeticalDesc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  };

  const filteredProducts = products.filter(applyFilters).sort(applySorting);

  const handleAddToCart = (product) => {
    addToBasket(product);
  };

  return (
    <div className="product-list-container">
      <div className="filter-buttons-container">
        <h3>Filter by Categories: </h3>
        <button className="filter-button" onClick={() => handleSelectCategory()}>
  All 
  </button>
  <button className="filter-button" onClick={() => handleSelectCategory('smartphones')}>
    Smartphones
  </button>
  <button className="filter-button" onClick={() => handleSelectCategory('laptops')}>
  Laptops
  </button>
  <button className="filter-button" onClick={() => handleSelectCategory('skincare')}>
   Skincare
  </button>
  <button className="filter-button" onClick={() => handleSelectCategory('fragrances')}>
  Fragrances
  </button>
  
  
  {/* Add more buttons for other categories as needed */}
</div>

      <div className="sorting-section">
        <label htmlFor="sortSelect" className="sort-label">
          Sort By:
        </label>
        <select id="sortSelect" value={sortOption} onChange={handleSortChange} className="sort-select">
          <option value="">Select</option>
          <option value="lowToHigh">Price Low to High</option>
          <option value="highToLow">Price High to Low</option>
          <option value="alphabeticalAsc">Alphabetical A-Z</option>
          <option value="alphabeticalDesc">Alphabetical Z-A</option>
        </select>
      </div>

      <FilterSidebar
        products={products}
        selectedCategory={filters.category}
        selectedPriceRange={filters.priceRange}
        onSelectCategory={handleSelectCategory}
        onSelectPriceRange={handleSelectPriceRange}
        onSelectRating={handleSelectRating}
        onSelectDiscount={handleSelectDiscount}
      />

      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <div className="no-items-message">
            <p>Filtreleri düzenleyin ürün yok texti.</p>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <div className="product-info">
                <div className="discount-badge">{product.discountPercentage}%</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">
  {product.description.split(' ').slice(0, 6).join(' ')}{product.description.split(' ').length > 5 ? '...' : ''}
</p>
                <p className="product-price">${product.price}</p>
                <div className="star-ratings">{renderStarRating(product.rating)}</div>
                <p className="rating-text">(Rating: {product.rating.toFixed(1)})</p>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Helper function to render star ratings
const renderStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(<span key={i} className="star">&#9733;</span>);
  }

  if (hasHalfStar) {
    starElements.push(<span key="half" className="half-star">&#9733;</span>);
  }

  return starElements;
};

export default ProductList;
