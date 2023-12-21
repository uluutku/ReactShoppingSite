// components/ShowAllItems.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowAllItems.css';

const ShowAllItems = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/');
        console.log('API Response:', response.data);
        setProducts(response.data.products || []); // Ensure that response.data.products is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!products || !Array.isArray(products)) {
    return <p>No products available.</p>;
  }

  return (
    <div className="featured-items-container">
      <h2>Featured Items</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-info">
              <div className="discount-badge">{product.discountPercentage}%</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">
                {product.description.split(' ').slice(0, 6).join(' ')}
                {product.description.split(' ').length > 5 ? '...' : ''}
              </p>
              <p className="product-price">${product.price}</p>
              <p className="rating-text">Rating: {product.rating.toFixed(1)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllItems;
