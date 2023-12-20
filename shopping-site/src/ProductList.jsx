// ProductList.jsx
import React, { useState } from 'react';
import FilterSidebar from './FilterSidebar.jsx';
import { useBasket } from './BasketContext';
import './ProductList.css'; // Import the ProductList.css file

const ProductList = ({ products }) => {
  const { addToBasket } = useBasket();

  const [filters, setFilters] = useState({
    category: null,
    priceRange: { min: '', max: '' },
  });

  const [sortOption, setSortOption] = useState('');

  const handleSelectCategory = (category) => {
    setFilters({ ...filters, category });
  };

  const handleSelectPriceRange = (priceRange) => {
    setFilters({ ...filters, priceRange });
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const applyFilters = (product) => {
    const { category, priceRange } = filters;
    const categoryFilter = !category || product.category === category;
    const priceFilter =
      !priceRange.min || !priceRange.max || (product.price >= priceRange.min && product.price <= priceRange.max);

    return categoryFilter && priceFilter;
  };

  const applySorting = (a, b) => {
    switch (sortOption) {
      case 'lowToHigh':
        return a.price - b.price;
      case 'highToLow':
        return b.price - a.price;
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
      <div className="sorting-section">
        <label htmlFor="sortSelect" className="sort-label">
          Sort By:
        </label>
        <select id="sortSelect" value={sortOption} onChange={handleSortChange} className="sort-select">
          <option value="">Select</option>
          <option value="lowToHigh">Price Low to High</option>
          <option value="highToLow">Price High to Low</option>
        </select>
      </div>

      <div className="slideshow-container">
        {/* Add your slideshow component here */}
      </div>

      <FilterSidebar
        products={products}
        selectedCategory={filters.category}
        selectedPriceRange={filters.priceRange}
        onSelectCategory={handleSelectCategory}
        onSelectPriceRange={handleSelectPriceRange}
      />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
